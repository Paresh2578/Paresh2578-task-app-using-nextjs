import { responseMessage } from "@/helper/responseMessage";
import { NextResponse } from "next/server";

export async function POST(request) {
  try{
    const response = NextResponse.json({
        message: "Logged out successfully",
        success: true,
      });
    
      //remove cookies
      response.cookies.set("authToken", "", {
        expires: new Date(0),
      });
    
      return response;
  }catch(error){
    return responseMessage("Log out fail", 500, false);
  }
}
