import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList/index.jsx'
import Product from './components/Product.jsx'
import NotFound from './components/NotFound.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="products" element={<ProductList />}>
            <Route path=":productId" element={<Product />}/>
          </Route>
        </Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
