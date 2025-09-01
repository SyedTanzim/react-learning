import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Exercise1 from './Exercises/Exercise1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Exercise1/>
  </StrictMode>,
)
