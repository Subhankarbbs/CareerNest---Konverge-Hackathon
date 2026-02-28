import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/NavBar'

const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default MainLayout