import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Exercise2 from './exercises/Exercise2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Exercise2 userName="Tanzim" textColor="Black"/>
  </StrictMode>,
)
