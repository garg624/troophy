'use client';
import { BaggageClaimIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const UICartNavbar = ({cartValue}) => {
  return (
    <nav className="w-screen shadow-md h-16 flex flex-col items-center justify-center relative">
      <Link href="/user/cart" type='button' title={`${cartValue} items in cart.`}>
        <BaggageClaimIcon />
        {cartValue != 0 && (
          
          <div className='badge absolute top-2 right-[47.5vw]' title={`${cartValue} items in cart.`}>
            {cartValue}
          </div>
          )
        }
      </Link>
    </nav>
  )
}

export default UICartNavbar;
