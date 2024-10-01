
import React from 'react'
import { RiLockPasswordFill } from "react-icons/ri";

export const metadata = {
  title: "Task : Add-Task",
};

export default function AddTask() {
  return (
    <div className="flex justify-center items-center p-5">
      <div className="container xl:w-1/3 lg:w-1/2 sm:w-1/2  h-fit border p-5 rounded-xl shadow-lg bg-white">
        <p className="text-center text-xl font-bold">Add - Task</p>
    
        <form className="flex flex-col space-y-2">

            {/* Title */}
            <div>
                <label for="website-admin" className="block text-sm  text-black">Title <span className="text-red-600">*</span></label>
                <input type="text" id="website-admin" className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Title" required name="title"/>
            </div>
           
           
            {/* Description */}
            <div>
                <label for="website-admin" className="block text-sm  text-black">Description <span className="text-red-600">*</span></label>
                 <textarea type="email" id="website-admin" className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter description" required name="description"/>
            </div>

             {/* status */}
             <div>
                <label for="website-admin" className="block text-sm font-medium text-black">Status <span className="text-red-600">*</span></label>
                <select  id="website-admin" className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Password" required name="password">
                  <option value="none" defaultValue="none">-- select status -- </option>
                  <option value="padding">Padding</option>
                  <option value="completed">Completed</option>
                </select>
            </div>

            {/* login button */}
            <div className="flex items-center justify-center mt-4">
                <button type="submit" className="bg-primary hover:bg-[#5e34ba] text-white font-bold py-2 px-4 rounded">Submit</button>
            </div>

        </form>
      </div>
    </div>
  )
}
