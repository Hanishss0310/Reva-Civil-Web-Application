import React from 'react'
import Gallery from './Gallery'
import Navbar from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'
function GalleryIndex() {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Navbar />
      <Gallery />
      <Footer />
    </div>
  )
}

export default GalleryIndex
