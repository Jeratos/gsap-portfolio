import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Stairs from './components/Stairs.tsx'
import Header from './components/header-footer/Header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Header />
      <Stairs > 

      <App />
      </Stairs>

    </BrowserRouter>
  </StrictMode>,
)