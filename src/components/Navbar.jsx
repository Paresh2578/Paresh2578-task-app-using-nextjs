import Link from 'next/link';
import React from 'react'


function Navbar() {
  return (
    <div className="px-10 py-5 text-secondary fixed w-full ">
      <div className="flex justify-between bg-primary  px-10 py-4 rounded-xl shadow-lg"> 
       <Link href={"/"} className="hover:cursor-pointer text-gray  font-bold text-xl">
         Work Manager
       </Link>

       <div className="flex space-x-4 items-center">
          <Link href="/" className="hover:cursor-pointer hover:text-background">Home</Link>
          <Link href={"addTask"} className="hover:cursor-pointer hover:text-background">Add Task</Link>
       </div>
       <div className="flex items-center space-x-4">
         <Link href={"/signup"}  className="hover:cursor-pointer hover:text-background">Sign Up</Link>
         <Link  href={"/login"} className="hover:cursor-pointer hover:text-background">Log In</Link>
       </div>
    </div>
    </div>
  )
}

export default Navbar;