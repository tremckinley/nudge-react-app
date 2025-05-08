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

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, 'agency-data.csv');
  }
});

const upload = multer({ storage: storage });

// Routes
app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    res.json({ message: 'File uploaded successfully', filename: req.file.filename });
  } catch (error) {
    res.status(500).json({ error: 'Error uploading file' });
  }
});

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