import User from "@/models/user.model";
import bcrypt from "bcrypt";


// api/users

import { responseMessage } from "@/helper/responseMessage";

export async function POST(request){
  try{
    let {username , email , password} = await request.json();

    // validate all the fields
    if(!username || !email || !password){
      return responseMessage("All fields are required", 400, false);
    }

    // check if the user already exists
    let user = await User.findOne({email : email});
    if(user){
      return responseMessage("Email are  already exists", 400, false);
    }

    //hash the password
     password = await bcrypt.hash(password, 10);

    // create a new user
    const newUser = new User({
      username,
      email,
      password
    });

    // save the user
    await newUser.save();
    // some logic
    return responseMessage("Sign up  successfully", 201, true);
  }catch(error){
    console.log(error) ;
     return responseMessage("Sign up Fail", 500, false);
  }
}