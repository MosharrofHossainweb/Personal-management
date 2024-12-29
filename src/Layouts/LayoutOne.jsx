import React from 'react'
import Navber from '../Componet/Navber/Navber'
import { Outlet } from 'react-router-dom'
import Footer from '../Componet/Footer/Footer'

const LayoutOne = () => {
  return (
    <>
      <Navber/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default LayoutOne
