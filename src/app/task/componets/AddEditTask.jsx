"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import React, { useEffect } from "react";
import { useForm  , } from "react-hook-form";

export default function AddEditTask({task , handleTask , loading}) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();


      useEffect(()=>{
        // set task value when edit task else empty
        reset({
          title : task.title || '',
          description : task.description || '',
          status : task.status || ''
        })

      },[task , reset])
    
   

  return (
    <div className="flex justify-center items-center p-5">
      <div className="container xl:w-1/3 lg:w-1/2 sm:w-1/2 h-fit border p-5 rounded-xl shadow-lg bg-white">
      <p className="text-center text-xl font-bold">{task ? "Edit Task" : "Add Task"}</p>
      <form
          className="flex flex-col space-y-2"
          onSubmit={handleSubmit(handleTask)}
        >
          {/* Title */}         
          <div>
            <label htmlFor="title" className="block text-sm text-black">
              Title <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="title"
              className={`rounded-lg bg-[#374151] placeholder:text-gray-400 text-gray-50   focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border p-2.5 ${
                errors.title ? "border-red-600" : "border-gray-300"
              }`}
              placeholder="Enter Title"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <p className="text-red-600 text-sm">{errors.title.message}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm text-black">
              Description <span className="text-red-600">*</span>
            </label>
            <textarea
              id="description"
              className={`rounded-lg  bg-[#374151] border placeholder:text-gray-400 text-gray-50 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 ${
                errors.description ? "border-red-600" : ""
              }`}
              placeholder="Enter description"
              {...register("description", {
                required: "Description is required",
              })}
            />
            {errors.description && (
              <p className="text-red-600 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Status */}
          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-black"
            >
              Status <span className="text-red-600">*</span>
            </label>
            <select
              id="status"
              className={`rounded-lg bg-[#374151] placeholder:text-gray-400 text-gray-50 border  focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 ${
                errors.status ? "border-red-600" : ""
              }`}
              {...register("status", { required: "Status is required" })}
            >
              <option value="">-- select status --</option>
              <option value="padding">Padding</option>
              <option value="completed">Completed</option>
            </select>
            {errors.status && (
              <p className="text-red-600 text-sm">{errors.status.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center mt-4">
            <button
              type="submit"
              className="bg-primary hover:bg-[#5e34ba] text-white font-bold py-2 px-4 rounded"
              disabled={loading}
            >
              {loading ? <LoadingSpinner /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
