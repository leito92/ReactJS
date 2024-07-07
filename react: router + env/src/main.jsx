import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import List from './components/List/index.jsx'
import Card from './components/Card/index.jsx'
import NotFound from './components/NotFound/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="products" element={<List />}>
            <Route path=":productId" element={<Card />}/>
          </Route>
        </Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
