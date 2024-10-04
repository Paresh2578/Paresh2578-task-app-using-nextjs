import { httpAxios } from "@/helper/httpHelper";




export async function addTask(task) {
    return httpAxios.post("/api/task" , task);
}

export async function getAllTasks() {
    return httpAxios.get("/api/task");
}