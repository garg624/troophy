'use client';
import { CircleUserRoundIcon, UserMinusIcon } from "lucide-react"
import { useToast } from "./ui/use-toast";
import { deleteUserAction } from "@/actions/DeleteUserAction";

const UserCard = ({userdata}) => {
  const {toast} = useToast();
  return (
    <div className="border w-max h-max p-4 rounded-md flex flex-col items-center justify-evenly text-2vw shadow-md gap-4 hover:scale-95 transition-all hover:cursor-pointer">
        <CircleUserRoundIcon size={40} />
        <div className="ml-[2vw]">
            <p className="text-lime-500 font-semibold">
                Name: 
                <span className="text-black font-normal">{userdata.username}</span>
            </p>
            <p className="text-lime-500 font-semibold">
                UserID:
                <span className="text-black font-normal">{userdata._id}</span>
            </p>

            <p className="text-lime-500 font-semibold">
                Access Token:
                <span className="text-black font-normal">{userdata.accessToken}</span>
            </p>

            <p className="text-lime-500 font-semibold">
                Role:
                <span className="text-black font-normal">{userdata.role}</span>
            </p>
        </div>
        <form action={()=>{
            deleteUserAction(userdata._id).then(
                toast({
                    title: "User Removed",
                    description: "User Removed From Database."
                })
            );
            // window.location.reload();
        }}>
            <button className="flex items-center justify-around bg-red-500 text-white p-3 rounded-md font-semibold hover:bg-red-600">
                <UserMinusIcon />
                <span className="ml-2">Delete User</span>
            </button>
        </form>
    </div>
  )
}

export default UserCard