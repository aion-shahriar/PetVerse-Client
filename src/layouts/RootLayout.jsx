import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

export default function RootLayout() {
  return (
    <div className='max-w-7xl mx-auto'>
        <Navbar />
        <Footer />
    </div>
  )
}
