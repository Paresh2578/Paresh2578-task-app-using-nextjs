"use client"

import { LogOut } from '@/service/userService';
import Link from 'next/link';
import React , {useState} from 'react'
import LoadingSpinner from './LoadingSpinner';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';


function Navbar() {
  // let user = JSON.parse(localStorage.getItem("user"));
  let user = localStorage.getItem("user");
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  console.log(user);

  const handleLogOut = async () =>{
    try{
      setLoading(true);
       let res = await LogOut();

       toast.success(res.data.message);
       
       //remove user infomation in local storage
       localStorage.removeItem("user");

       //reload page
        window.location.reload();

       router.replace("/login");
    }catch(error){
       toast.error(error.response.data.message);
    }
    setLoading(false);
  }

  return (
    <div className="px-10 py-5 text-secondary fixed w-full ">
      <div className="flex justify-between bg-primary  px-10 py-4 rounded-xl shadow-lg"> 
       <Link href={"/"} className="hover:cursor-pointer text-gray  font-bold text-xl">
         Work Manager
       </Link>

       <div className="flex space-x-4 items-center">
          <Link href="/" className="hover:cursor-pointer hover:text-background">Home</Link>
          <Link href={"task/addTask"} className="hover:cursor-pointer hover:text-background">Add Task</Link>
       </div>
       {
        user ?
        <div className="flex items-center space-x-4">
        <p className="hover:cursor-pointer hover:text-background">{user.toString()}</p>
        <p onClick={handleLogOut} className="hover:cursor-pointer hover:text-background">{loading ? <LoadingSpinner/> : "Log out"}</p>
        </div>
          : 
        <div className="flex items-center space-x-4">
          <Link href={"/signup"}  className="hover:cursor-pointer hover:text-background">Sign Up</Link>
          <Link  href={"/login"} className="hover:cursor-pointer hover:text-background">Log In</Link>
       </div>}
    </div>
    </div>
  )
}

export default Navbar;