'use client'
import React, { useState } from 'react'

const UICartRibbon = () => {
    // name
    // price per piece
    // quantity
    // total
    const [quantity, setQuantity] = useState(1);
  return (
    <div className='border flex items-center justify-evenly shadow-md w-full rounded-none p-2'>
        <p>Trohpy Name</p>
        <p>&#x20b9;10</p>
        <input type='number' placeholder='1' value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} min={1} max={100}/>
        <p>&#x20b9;400</p>
    </div>
  )
}

export default UICartRibbon