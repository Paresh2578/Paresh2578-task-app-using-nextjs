
import React from 'react'
import { RiLockPasswordFill } from "react-icons/ri";

export const metadata = {
    title: "Task : Log in",
  };
  

export default function Login() {
  return (
    <div className="flex justify-center h-[80vh] items-center p-5">
      <div className="container xl:w-1/3 lg:w-1/2 sm:w-1/2  h-fit border p-5 rounded-xl shadow-lg bg-white">
        <p className="text-center text-xl font-bold">Log In</p>

        <form className="flex flex-col space-y-2">
           
            {/* email */}
            <div>
                <label for="website-admin" className="block text-sm  text-black">Email <span className="text-red-600">*</span></label>
                <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                </svg>
                </span>
                <input type="email" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter email" required name="email"/>
                </div>
            </div>

             {/* password */}
             <div>
                <label for="website-admin" className="block text-sm font-medium text-black">Password <span className="text-red-600">*</span></label>
                <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      <RiLockPasswordFill />
                </span>
                <input type="password" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Password" required name="password"/>
                </div>
            </div>

            {/* login button */}
            <div className="flex items-center justify-center mt-4">
                <button type="submit" className="bg-primary hover:bg-[#5e34ba] text-white font-bold py-2 px-4 rounded">Log In</button>
            </div>

        </form>
      </div>
    </div>
  )
}
