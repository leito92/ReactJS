import React from 'react'
import ReactDOM from 'react-dom/client'
import Signin from './components/Signin/index.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import App from'./App.jsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Signup from './components/Signup/index.jsx'
import Card from './components/Card/index.jsx'
import NotFound from './components/NotFound/index.jsx'
import { UserCtxProvider } from './context/userContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserCtxProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />}/>
          <Route path="home" element={<App />}>
            <Route path=':productId' element={<Card />}/>
          </Route>
          <Route path='signup' element={<Signup />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </UserCtxProvider>
  </React.StrictMode>,
)
