
// API : /api/task/[taskId]

import { responseMessage } from "@/helper/responseMessage";
import Task from "@/models/task.model";

// Delete Task by id
export async function DELETE(request ,  { params }) {
    try{
        let {taskId} = params;

        let task = await Task.findByIdAndDelete(taskId);

        if(!task){
            return responseMessage("Task Not Found", 404, false);
        }

        return responseMessage("Task Deleted Successfully", 200, true);
    }catch(error){
        console.log(error);
      return responseMessage("Delete Task Failed !", 500, false);
    }  
}

// Update Task by id
export async function PUT(request ,  { params }) {
    try{
        let {taskId} = params;
        let {title , description , status} = await request.json();

        // validate all the fields
        if(!title || !description){
            return responseMessage("All fields are required", 400, false);
        }

        let task = await Task.findByIdAndUpdate(taskId , {title , description , status});
        if(!task){
            return responseMessage("Task Not Found", 404, false);
        }

        return responseMessage("Task Updated Successfully", 200, true);
    }catch(error){
        console.log(error);
        return responseMessage("Update Task Failed !", 500, false);
    }  
}

// get Task by id
export async function GET(request ,  { params }) {
    try{
        let {taskId} = params;
        let task = await Task.findById(taskId);
        if(!task){
            return responseMessage("Task Not Found", 404, false);
        }
        return responseMessage("Task Details", 200, true, task);
    }catch(error){
        console.log(error);
        return responseMessage("Get Task Failed !", 500, false);
    }  
}