import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import DailyPrices from './components/DailyPrices'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Signup from './components/Signup'
import Roadmap from './components/Roadmap'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Home />
      <DailyPrices />
      <AboutUs />
      <Services />
      <Signup />
      <Roadmap />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
