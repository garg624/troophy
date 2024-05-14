'use client';
import MultiFieldForm from '@/components/MultiFieldForm';
import { getDateTime } from '@/utils/currentDateWithTIme.util';
import React, { useEffect, useState } from 'react';

const page = () => {


  const [DateTime,setDateTime] = useState("");

  useEffect(()=> {
    setDateTime(getDateTime());
  },[]);

  return (
    <main className='w-max'>
      <h3 className='text-blue-500 text-center font-semibold m-4'>Billing Date: {DateTime}</h3>

      <MultiFieldForm colums={["Award Name", "Quantity", "Price"]} dateTime={DateTime}/>
    </main>
  );
};

export default page;
