import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import { create } from 'framer-motion/client'

create = createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

