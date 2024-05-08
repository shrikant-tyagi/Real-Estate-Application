import React from 'react'
import { Outlet } from 'react-router-dom'
import './layout.scss'
import Navbar from '../../components/navbar/Navbar'

const Layout = () => {
  return (
    <div className='container'>
      <div className='layout'>
        <Navbar />
        <div className='content'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout