"use client"

import LoadingSpinner from '@/components/LoadingSpinner';
import { addTask } from '@/service/taskService';
import { useRouter } from 'next/navigation';
import React ,{useState} from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function AddTaskPage() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();
    

    const [loading, setLoading] = useState(false);
    

    const handleAddPost = async(data) => {
        try{
            setLoading(true);
             let res = await addTask(data);
     
             toast.success(res.data.message);
     
             router.replace("/");
          }catch(error){
             toast.error(error.response.data.message);
          }
          setLoading(false);
    };
  return (
    <div className="flex justify-center items-center p-5">
    <div className="container xl:w-1/3 lg:w-1/2 sm:w-1/2 h-fit border p-5 rounded-xl shadow-lg bg-white">
      <p className="text-center text-xl font-bold">Add - Task</p>
  
      <form className="flex flex-col space-y-2" onSubmit={handleSubmit(handleAddPost)}>

        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm text-black">Title <span className="text-red-600">*</span></label>
          <input
            type="text"
            id="title"
            className={`rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 ${errors.title ? 'border-red-600' : ''}`}
            placeholder="Enter Title"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && <p className="text-red-600 text-sm">{errors.title.message}</p>}
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm text-black">Description <span className="text-red-600">*</span></label>
          <textarea
            id="description"
            className={`rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 ${errors.description ? 'border-red-600' : ''}`}
            placeholder="Enter description"
            {...register("description", { required: "Description is required" })}
          />
          {errors.description && <p className="text-red-600 text-sm">{errors.description.message}</p>}
        </div>

        {/* Status */}
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-black">Status <span className="text-red-600">*</span></label>
          <select
            id="status"
            className={`rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 ${errors.status ? 'border-red-600' : ''}`}
            {...register("status", { required: "Status is required" })}
          >
            <option value="">-- select status --</option>
            <option value="padding">Padding</option>
            <option value="completed">Completed</option>
          </select>
          {errors.status && <p className="text-red-600 text-sm">{errors.status.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center mt-4">
          <button type="submit" className="bg-primary hover:bg-[#5e34ba] text-white font-bold py-2 px-4 rounded" disabled={loading}>{loading ? <LoadingSpinner/> :"Submit"}</button>
        </div>

      </form>
    </div>
  </div>
  )
}
