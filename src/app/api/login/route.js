import { responseMessage } from "@/helper/responseMessage";
import User from "@/models/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";


// API : api/login

export  async function POST(request){
    try{
        let {email , password} =await request.json();

        // validate all the fields
        if(!email || !password){
            return responseMessage("All fields are required", 400, false);
        }

        // varify email 
        let user = await User.findOne({email : email});
        if(!user){
            return responseMessage("Email are not exists", 400, false);
        }
        
        // verify password
        let isValid = await bcrypt.compare(password , user.password);
        if(!isValid){
            return responseMessage("Password is not correct", 400, false);
        }

        //genrate token
        let token = jwt.sign({id : user._id}, process.env.JWT_SECRET, {expiresIn : '1d'});

        // send response
        let response = NextResponse.json({message : "Login successfully", success : true, username : user.username}, {status : 200});

        // set cookie
        response.cookies.set("authToken" , token , {httpOnly : true});

        return response;
        

    }catch(error){
        console.log(error);
        return responseMessage("Sign up Fail", 500, false);
    }
}