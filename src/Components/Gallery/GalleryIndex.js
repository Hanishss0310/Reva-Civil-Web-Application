import React from 'react'
import Gallery from './Gallery'
import Navbar from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'
import PartnersShowcase from '../Services/PartnersShowcase'
import WhyChooseUs from '../Services/WhyChooseUs'
function GalleryIndex() {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Navbar />
      <PartnersShowcase />
      <Gallery />
      <WhyChooseUs />

      <Footer />
    </div>
  )
}

export default GalleryIndex
