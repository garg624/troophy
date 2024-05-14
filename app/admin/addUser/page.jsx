'use client';
import { submitAction } from "@/actions/submitAction";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation";
import { BookUserIcon, PackagePlusIcon, UserRoundPlusIcon } from "lucide-react";
import crypto from "crypto";

const Page = () => {

   const router = useRouter();
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [accessToken, setAccessToken] = useState("");
   const {toast} = useToast();
   useEffect(()=>{
      setAccessToken(crypto.randomBytes(20).toString('hex'));
   },[])
 return (
   <div className=" w-screen h-screen flex items-center justify-center">
      <form
      className="flex flex-col items-center justify-center gap-5"
      action={ (e) => {
         try {
            submitAction(e);
            setUsername("");
            setPassword("");
            setAccessToken(crypto.randomBytes(20).toString('hex'));
            toast({
               title: "New Admin",
               description: "A new user is begin added to database."
            })
         }catch(error) {
            toast({
               title: "Something Went Wrong",
               description: "Something went wrong while registering user."
            });
         }
         }}>
         <label htmlFor="username">Username: 
            <input value={username} type="text" required placeholder="Ex: Shivam Sharma" className="input input-bordered input-md w-full max-w-xs" name="username" onChange={(e)=>setUsername(e.target.value)} id="username"/>
         </label>
         <label htmlFor="password">Password: 
            <input required type="text" value={password} placeholder="Ex: Shivam@123_simplePass" className="input input-bordered input-md w-full max-w-xs" name="password" onChange={(e)=>setPassword(e.target.value)} id="password"/>
         </label>
         <label htmlFor="accessToken">AC Token: 
            <input type="text" value={accessToken} readOnly className="input input-bordered input-md w-full max-w-xs bg-zinc-200 cursor-not-allowed" name="accessToken" id="accessToken"/>
         </label>
         <div className="w-full flex items-center justify-evenly">
            
            <button className="btn btn-neutral hover:text-white" type="submit">
               <UserRoundPlusIcon />
               Add User
            </button>
            <div 
            onClick={()=> {router.push("/admin/addProduct");}}
            type="button"
            value="Add Product"
            className="btn btn-info hover:text-white"
            title="Add New Award"
            >
               <PackagePlusIcon />
            </div>
            <div 
            onClick={()=> {router.push("/admin/viewUsers");}}
            type="button"
            value="view Users"
            className="btn btn-warning hover:text-white"
            title="View all Users"
            >
               <BookUserIcon />
            </div>
         </div>
      </form>
   </div>
 )
};

export default Page;
