"use client"

import { useRouter } from 'next/navigation';
import React , {useState,useEffect} from 'react'
import toast from 'react-hot-toast';
import AddEditTask from '../../componets/AddEditTask';
import { editTask, getTaskById } from '@/service/taskService';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function page({params}) {
  const router = useRouter();
  const {taskId} = params;

  const [task , setTask] = useState({});
  const [loading, setLoading] = useState(false);
  const [taskLoading , setTaskLoading] = useState(true);


  useEffect(()=>{
       getTask();
  },[taskId]);
  
  
  
  // get task by id
  const getTask = async () => {
    try {
      setTaskLoading(true);
      let res = await getTaskById(taskId);

      setTask(res.data.data);
    } catch (error) {
      toast.error(error.response.data.message);
    }
    setTaskLoading(false);
  };


  

  const handleTask = async (data) => {
    try {
      setLoading(true);
      let res = await editTask(taskId,data);

      toast.success(res.data.message);

      router.replace("/");
    } catch (error) {
      toast.error(error.response.data.message || "Edit Task Failed");
    }
    setLoading(false);
  };


  return (
     <>
     {/* {taskLoading ? <LoadingSpinner/> : */}
     {taskLoading ? <div className="flex justify-center items-center mt-10">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-solid"></div>
            <p className="ml-4 text-xl font-bold text-grey ">Loading...</p>
          </div>  :
     <AddEditTask task={task} handleTask={handleTask} loading={loading} setLoading={setLoading}/>
}
     </>
  );
}
