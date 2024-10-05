"use client"

import { deleteTask, getAllTasks } from '@/service/taskService';
import React , {useState , useEffect} from 'react'
import Swal from 'sweetalert2'
import toast from 'react-hot-toast';
import { formatDateTime } from '@/helper/formatDatas';

import { MdDelete , MdModeEdit } from "react-icons/md";
import { useRouter } from 'next/navigation';

function HomePage() {
  // channge tittle
  document.title = "Task : Home";

  const router = useRouter();

  const [tasks , setTasks] = useState([]);
  const [loading, setLoading] = useState(false);



  useEffect(()=>{
    // setTasks();
    getAllTasksFromDB();
  },[]);

  const getAllTasksFromDB = async () => {
    try{
       setLoading(true);
       let res = await getAllTasks();

       setTasks(res.data.data);
      

    }catch(error){
       toast.error(error.response.data.message);
    }
    setLoading(false);
  }

  // handle delete task
  const handleDeleteTask = async (taskId)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async(result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleting...',
          text: 'Please wait while we detele your task',
          allowOutsideClick: false,
          onBeforeOpen: () => {
            Swal.showLoading();
          }
        });

        try{
          // delete task
        let res = await deleteTask(taskId);
        toast.success(res.data.message);

        // filter task
        setTasks(tasks.filter(task => task._id !== taskId));


        }catch(error){
          toast.error(error.response.data.message);
        }

        // close swal loading
        Swal.close();
      }
    });
  }

  return (
    <div>
      <div className="flex justify-center items-center p-5">
        <div className="container xl:w-1/2 lg:w-1/2 sm:w-full  h-fit ">
          <p className="text-center text-2xl text-secondary mb-3 font-bold">Tasks List</p>
            {loading  ?
             <div className="flex justify-center items-center mt-10">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-solid"></div>
            <p className="ml-4 text-xl font-bold text-grey ">Loading...</p>
          </div> 
          :  <div className="flex flex-col space-y-2">
            {tasks.length == 0 ? <p className="text-center text-xl text-secondary opacity-85">No Task Found !!</p> :
              tasks.map((task , index) => {
                return (
                  <div key={index} className={`hover:cursor-pointer ${task.status == "padding" ? "bg-secondary":"bg-green-500" } hover:bg-gray-300  p-2 rounded-lg`}>
                    <div className="flex justify-between">
                      <p className="font-bold text-2xl text-primary">{task.title}</p>
                      <div className="flex space-x-2">
                          <MdModeEdit onClick={()=> router.push(`/task/editTask/${task._id}`)} className="text-2xl  hover:cursor-pointer text-primary hover:text-primary"/>
                          <MdDelete onClick={()=> handleDeleteTask(task._id)} className="text-2xl text-red-700 hover:cursor-pointer hover:text-red-600"/>
                      </div>
                    </div>
                    <p>{task.description}</p>
                    <div className="flex justify-between">
                      <p>{task.status}</p>
                      <p>{formatDateTime(task.createdAt)}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>}
        </div>
      </div>
    </div>
  )
}

export default HomePage
