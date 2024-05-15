'use client'
import AwardCard from "@/components/AwardCard"
import TrophyLoader from "@/components/TrophyLoader";
import UICartNavbar from "@/components/UICartNavbar";
import { useEffect, useState } from "react"

const page = () => {
  const [awardsList, setAwardsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  localStorage.setItem('cart',JSON.stringify(cart));

  useEffect(()=> {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch("/api/getCatalog", {
        method: 'GET',
      });
      const data = await res.json();
      setAwardsList(data);
      setIsLoading(false);
    };

    fetchData().catch(error => {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    });
  },[]);

  if (isLoading) {
    return <TrophyLoader />;
  }

  return (
    <>
    <UICartNavbar cartValue={cart.length} />
    <div className="p-4 w-screen flex flex-wrap gap-4 overflow-x-hidden">
      {
        awardsList.length > 0 ? 
        awardsList.map((award)=>(
          <AwardCard award={award} key={award._id} cart={cart} setCart={setCart} />
        )) :
        (
          <div className="w-11/12 flex flex-col items-center justify-center">
            <p className="text-5xl font-semibold text-blue-500">No Awards 😓</p>
          </div>
        )
      }
    </div>
    </>
  )
}

export default page
