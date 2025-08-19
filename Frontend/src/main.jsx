import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from './page/home/HomePage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Signup from './page/signup/Signup.jsx'
import AboutPage from './page/about/AboutPage.jsx'
import PricingPage from './page/pricing/PricingPage.jsx'
import SupportPage from './page/suppport/SupportPage.jsx'
import ProductPage from './page/products/ProductPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>


      <Route path='/' element={<HomePage />}></Route>
      <Route path='/support' element={<SupportPage />}></Route>
      <Route path='/about' element={<AboutPage />}></Route>
      <Route path='/pricing' element={<PricingPage />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
       <Route path='/product' element={<ProductPage />}></Route>

    </Routes>




  </BrowserRouter>
)
