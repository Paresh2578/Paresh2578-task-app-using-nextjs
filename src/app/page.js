"use client"

import React , {useState , useEffect} from 'react'
import { IoMdClose } from "react-icons/io";

function HomePage() {
  // channge tittle
  document.title = "Task : Home";

  const [tasks , setTasks] = useState([]);

  let arr = [
    {
      title : "Learn Java",
      description : "Learn Java from scratch",
      status : "padding",
      date : "2022-10-10"
    },
    {
      title : "Learn React",
      description : "Learn React from scratch",
      status : "padding",
      date : "2022-10-10"
    },
    {
      title : "Learn Python",
      description : "Learn Python from scratch",
      status : "completed",
      date : "2022-10-10"
    },
    {
      title : "Learn Go",
      description : "Learn Go from scratch",
      status : "padding",
      date : "2022-10-10"
    },
    {
      title : "Learn Rust",
      description : "Learn Rust from scratch",
      status : "completed",
      date : "2022-10-10"
    },
  ]


  useEffect(()=>{
    setTasks(arr);
  },[]);

  return (
    <div>
      <div className="flex justify-center items-center p-5">
        <div className="container xl:w-1/2 lg:w-1/2 sm:w-full  h-fit">
          <p className="text-center text-2xl text-secondary mb-3 font-bold">Tasks List</p>
          <div className="flex flex-col space-y-2">
            {
              tasks.map((task , index) => {
                return (
                  <div key={index} className={`hover:cursor-pointer ${task.status == "padding" ? "bg-secondary":"bg-green-500" } hover:bg-gray-300  p-2 rounded-lg`}>
                    <div className="flex justify-between">
                      <p className="font-bold text-2xl">{task.title}</p>
                      <div >
                          <IoMdClose className="text-2xl hover:cursor-pointer hover:text-red-600"/>
                      </div>
                    </div>
                    <p>{task.description}</p>
                    <div className="flex justify-between">
                      <p>{task.status}</p>
                      <p>{task.date}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
