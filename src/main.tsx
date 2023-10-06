import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'aos/dist/aos.css'
import { AnimatePresence } from 'framer-motion'
import ReactDOM from 'react-dom/client'
import Router from './Router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AnimatePresence>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AnimatePresence>
  </React.StrictMode>
)
