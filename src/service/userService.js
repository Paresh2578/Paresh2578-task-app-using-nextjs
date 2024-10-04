import { httpAxios } from "@/helper/httpHelper";


export async function SignUp(user){
  return httpAxios.post("/api/signup", user)
}

export async function LogIn(loginInformation) {
  return httpAxios.post("/api/login", loginInformation)
}

export async function LogOut() {
  return httpAxios.post("/api/logout");
}