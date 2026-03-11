import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className=''>
        <Navbar className="" />
        <Outlet className="" />
        <Footer />
    </div>
  )
}
