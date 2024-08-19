import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import store from './reducer/store.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Update from './compo/Update.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                <Route path='/' element={<App />} />
                <Route path='/update' element={<Update />} />
              </Routes>
          </BrowserRouter>
      </Provider>
   
  </StrictMode>,
)
