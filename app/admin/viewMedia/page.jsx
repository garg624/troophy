'use client'
import AdminMediaTable from "@/components/AdminMediaTable";
import TrophyLoader from "@/components/TrophyLoader";
import { useEffect, useState } from "react"; 

const page = () => {
  const [awardList, setAwardList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    const fetchAwards = async () => {
      setIsLoading(true);
      const response = await fetch("/api/getCatalog",{
        method: 'GET',
      });
      const data = await response.json();
      setAwardList(data);
      setIsLoading(false);
    }

    fetchAwards().catch(error => {
      setIsLoading(false);
    });
    
  },[])
  
  return (
    <div>
      {isLoading == true ?
      <TrophyLoader />
      :
      <AdminMediaTable awardList={awardList} setAwardList={setAwardList}/>
      }
    </div>
  )
}

export default page