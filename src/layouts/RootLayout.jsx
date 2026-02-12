import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className='max-w-7xl mx-auto'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}
