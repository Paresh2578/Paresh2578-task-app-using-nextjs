"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import { addTask } from "@/service/taskService";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import AddEditTask from "../componets/AddEditTask";

export default function AddTaskPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  

  const handleTask = async (data) => {
    try {
      setLoading(true);
      let res = await addTask(data);

      toast.success(res.data.message);

      router.replace("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
    setLoading(false);
  };
  return (
      <AddEditTask handleTask={handleTask} loading={loading} setLoading={setLoading}/>
  );
}
