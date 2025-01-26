import React from 'react'
import BreadCu from './BreadCu'

const ShopBanner = () => {
  return (
    <>
    <section className='lg:pt-32 lg:pb-32 '>
        <div className="container bg-[url('/Programing.jpg')] pt-10 lg:pt-[100px] lg:pb-[100px] pb-10 bg-no-repeat bg-cover bg-center  ">
            <h2 className='title text-blue-100 text-center pb-10 pt-10'>Make Your business more Andvance with me</h2>
            <BreadCu/>
        </div>
    </section>
    </>
  )
}

export default ShopBanner