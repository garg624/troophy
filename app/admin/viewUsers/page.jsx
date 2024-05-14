'use client';
import TrophyLoader from "@/components/TrophyLoader";
import UserCard from "@/components/UserCard"
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
  const [userData,setUserData] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  
  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true);
      const response = await fetch("/api/getAllUsers",{
        method: 'GET',
      });
      const data = await response.json();
      setUserData(data);
      setIsLoading(false);
    }

    getUsers().catch(error => {
      setIsLoading(false);
    });
    console.log(userData);
    
  }, []);

  return (
    <main className="p-4 w-screen h-screen flex gap-4 flex-wrap">
      {isLoading ? 
        <TrophyLoader /> :
        (userData.length > 0 ? (
            userData.map((user_data)=>(
                <UserCard userdata={user_data} key={user_data._id} />
            ))
        ):
        <div>
          <p>No Users</p>
          <Link href="/admin/">Add User</Link>
        </div> 
        )
      }
    </main>
  );
}

export default Page;
