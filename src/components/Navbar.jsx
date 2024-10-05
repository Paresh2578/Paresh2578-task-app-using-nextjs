"use client"

import { LogOut } from '@/service/userService';
import Link from 'next/link';
import React , {useState} from 'react'
import LoadingSpinner from './LoadingSpinner';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

//icons
import { IoMdClose,IoMdMenu } from "react-icons/io";


function Navbar() {
  // let user = JSON.parse(localStorage.getItem("user"));
  let user = localStorage.getItem("user");
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



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

  const handleNavigation = (path) =>{
    router.push(path);
    toggleMenu();
  }

  return (
    <nav className="p-4 fixed w-full top-0 left-0 z-10 ">
    <div className="container mx-auto bg-primary flex justify-between items-center px-10 py-4 rounded-xl shadow-lg">
      {/* Logo */}
      <Link href={"/"} className="hover:cursor-pointer text-secondary  font-bold text-xl">
         Work Manager
       </Link>


      {/* Desktop Menu */}
     {user && <div className="hidden md:flex space-x-4 items-center">
          <p onClick={()=> handleNavigation("/")} className="hover:cursor-pointer text-secondary hover:text-background">Home</p>
          <p onClick={()=> handleNavigation("/task/addTask")} className="hover:cursor-pointer text-secondary hover:text-background">Add Task</p>
       </div>}
       {
        user ?
        <div className="hidden md:flex items-center space-x-4">
        <p className="hover:cursor-pointer text-secondary hover:text-background"><span className="">Wel-come! </span>{user.toString()}</p>
        <p onClick={handleLogOut} className="hover:cursor-pointer  border rounded p-2 hover:bg-background bg-white hover:text-secondary text-background">{loading ? <LoadingSpinner/> : "Log out"}</p>
        </div>
          : 
        <div className="hidden md:flex items-center space-x-4">
          <p onClick={()=> handleNavigation("/signup")}  className="hover:cursor-pointer text-secondary hover:text-background">Sign Up</p>
          <p  onClick={()=> handleNavigation("/login")} className="hover:cursor-pointer text-secondary hover:text-background">Log In</p>
       </div>}

      {/* Hamburger Icon for Mobile */}
      <div
        className="md:hidden flex items-center text-white cursor-pointer"
        onClick={toggleMenu}
      >
         {isOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
      </div>
    </div>

    {/* Mobile Menu */}
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } md:hidden bg-gray-800 me-20 ms-20  mt-2 rounded transition-all duration-1000 ease-in-out`}
    >
      <ul className="flex flex-col space-y-4 p-4 text-white text-center">
        {user && <li className="hover:text-gray-400 transition duration-300">
         <p onClick={()=> handleNavigation("/")}  className="hover:cursor-pointer text-secondary hover:text-background">Home</p>
        </li>}
       {user && <li className="hover:text-gray-400 transition duration-300">
        <p onClick={()=> handleNavigation("/task/addTask")} className="hover:cursor-pointer text-secondary hover:text-background">Add Task</p>
        </li>
  }
       {user &&  <li className="hover:text-gray-400 transition duration-300">
          <p className="hover:cursor-pointer text-secondary hover:text-background"><span className="">Wel-come! </span>{user.toString()}</p>
        </li>}
        {user &&  <li className="hover:text-gray-400 transition duration-300">
          <p onClick={handleLogOut} className="hover:cursor-pointer border rounded p-2 hover:bg-background bg-white hover:text-secondary text-background">{loading ? <LoadingSpinner/> : "Log out"}</p>
        </li>}
       {!user &&  <li className="hover:text-gray-400 transition duration-300">
         <p  onClick={()=> handleNavigation("/signup")}  className="hover:cursor-pointer text-secondary hover:text-background">Sign Up</p>
         
        </li>}
        {!user && <li className="hover:text-gray-400 transition duration-300">
          <p onClick={()=> handleNavigation("/login")}className="hover:cursor-pointer text-secondary hover:text-background">Log In</p>
        </li>}
      </ul>
    </div>
  </nav>
  )
}

export default Navbar;