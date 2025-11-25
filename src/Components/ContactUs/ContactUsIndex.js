import React from 'react'
import Navbar from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'
import ContactCard from './ContactCard'

function ContactUsIndex() {
  return (
    <div style={{fontFamily:"Poppins, sans-serif"}}>
      <Navbar />
      <ContactCard />
      <Footer />
    </div>
  )
}

export default ContactUsIndex
