import { responseMessage } from "@/helper/responseMessage";
import Task from "@/models/task.model";

// API /api/task/

// Add Task
export async function POST(request) {
    try{
        let {title , description , status} = await request.json();

        // validate all the fields
        if(!title || !description){
            return responseMessage("All fields are required", 400, false);
        }

          // Access user ID from headers (set by middleware)
          const userId = request.headers.get('user-id');

        // Add  task
        let task = new Task({title , description , status , user : userId});
        await task.save();

        return responseMessage("Task Added Successfully", 200, true);
    }catch(error){
        console.log("add task error : " ,error);
        return responseMessage("Add Task Failed !", 500, false);
    }
}

// Get All Task by user
export async function GET(request) {
    try{
        // Access user ID from headers (set by middleware)
        const userId = request.headers.get('user-id');
        let tasks = await Task.find({user : userId});
        return responseMessage("Task List", 200, true, tasks);
    }catch(error){
        console.log("get task error : " ,error);
        return responseMessage("Get Task Failed !", 500, false);
    }
}

