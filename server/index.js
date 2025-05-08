import express from 'express';
import multer from 'multer';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// 1. Basic Storage Configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // Add timestamp to filename to make it unique
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.csv');
  }
});

// 2. File Filter Configuration
const fileFilter = (req, file, cb) => {
  // Accept only CSV files
  if (file.mimetype === 'text/csv' || file.mimetype === 'application/vnd.ms-excel') {
    cb(null, true);
  } else {
    cb(new Error('Only CSV files are allowed!'), false);
  }
};

// 3. Different Multer Configurations
// For single file upload
const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// For multiple files
const uploadMultiple = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Memory storage (for processing files without saving to disk)
const memoryStorage = multer.memoryStorage();
const uploadMemory = multer({ 
  storage: memoryStorage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Routes
// 1. Single file upload
app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    res.json({ 
      message: 'File uploaded successfully', 
      filename: req.file.filename,
      size: req.file.size,
      mimetype: req.file.mimetype
    });
  } catch (error) {
    res.status(500).json({ error: 'Error uploading file' });
  }
});

// 2. Multiple files upload
app.post('/api/upload-multiple', uploadMultiple.array('files', 5), (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }
    res.json({ 
      message: 'Files uploaded successfully',
      files: req.files.map(file => ({
        filename: file.filename,
        size: file.size,
        mimetype: file.mimetype
      }))
    });
  } catch (error) {
    res.status(500).json({ error: 'Error uploading files' });
  }
});

// 3. Memory storage example
app.post('/api/upload-memory', uploadMemory.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    // Process the file from memory
    const fileContent = req.file.buffer.toString('utf-8');
    const rows = fileContent.split('\n').map(row => row.split(','));
    
    res.json({ 
      message: 'File processed successfully',
      rows: rows.length,
      preview: rows.slice(0, 5) // Send first 5 rows as preview
    });
  } catch (error) {
    res.status(500).json({ error: 'Error processing file' });
  }
});

// Error handling middleware for Multer errors
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File too large. Max size is 5MB' });
    }
    return res.status(400).json({ error: error.message });
  }
  next(error);
});

// Existing routes
app.get('/api/agency-data', (req, res) => {
  try {
    const filePath = join(__dirname, 'uploads', 'agency-data.csv');
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'No data file found' });
    }
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const rows = fileContent.split('\n').map(row => row.split(','));
    const data = rows.slice(1); // Skip header row
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error reading data file' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 