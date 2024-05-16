'use client';
import Award from '@/models/award';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cartProducts, setCartProducts] = useState([]);

  
  useEffect(() => {
    const fetchAwards = async () => {
      try {
        const awardIds = JSON.parse(localStorage.getItem('cart'));
        const data = Award.find({_id: {$in: awardIds}}).exec();
        setCartProducts(data);
      } catch (error) {
        console.error('Error fetching awards:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAwards();
  }, []);

  return (
    <div className='flex w-screen h-screen'>
      <section id='cartInfoSection' className='w-1/2 border border-red-500 p-4'>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {cartProducts.map((award, index) => (
              <li key={index}>{/* Render your award information here */}</li>
            ))}
          </ul>
        )}
      </section>
      <section id='cartCheckoutSection' className='w-1/2 border border-blue-500'></section>
    </div>
  );
};

export default Page;
