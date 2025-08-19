import React from 'react'
import Hero from './Hero'
import Stats from './Stats'
import Awards from './Awards'
import Edution from './Edution'
import OpenAccount from '../OpenAccount'
import Pricing from './Pricing'
import Navbar from '../Navbar'
import Footer from '../Footer'


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Awards />
      <Pricing />
      <Edution />
      <OpenAccount />
      <Footer />


    </div>
  )
}

export default HomePage
