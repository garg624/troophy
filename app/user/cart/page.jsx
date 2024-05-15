'use client'
import UICartRibbon from '@/components/UICartRibbon'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [localCart, setLocalCart] = useState([]);
  useEffect(()=>{
    const cart = JSON.parse(localStorage.getItem('cart'));
    // setLocalCart(cart);
  },[]);
  return (
    <div className='flex w-screen h-screen'>
      <section id='cartInfoSection' className='w-1/2 border border-red-500 p-4'>
      </section>
      <section id='cartCheckoutSection' className='w-1/2 border border-blue-500'></section>
    </div>
  )
}

export default page