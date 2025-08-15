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
          <Stats /> 
          <Pricing /> 
          <OpenAccount />
        <Edution />
        <Footer/>
          
      
    </div>
  )
}

export default HomePage
