import Task from "@/models/task.model";


export async function POST(request) {
    try{
        let {title , description , status} = await request.json();

        // validate all the fields
        if(!title || !description){
            return responseMessage("All fields are required", 400, false);
        }

        // Add  task
        let task = new Task({title , description , status , user : request.user._id});
        await task.save();

        return responseMessage("Task Added Successfully", 200, true);
    }catch(error){
        console.log(error);
        return responseMessage("Add Task Failed !", 500, false);
    }
}