import { httpAxios } from "@/helper/httpHelper";

export async function addTask(task) {
    return httpAxios.post("/api/task" , task);
}

export async function getAllTasks() {
    return httpAxios.get("/api/task");
}

// delete task
export async function deleteTask(taskId) {
    return httpAxios.delete(`/api/task/${taskId}`);
}

// get task by id
export async function getTaskById(taskId) {
    return httpAxios.get(`/api/task/${taskId}`);
}

// edit task by id
export async function editTask(taskId , task) {
    return httpAxios.put(`/api/task/${taskId}` , task);
}