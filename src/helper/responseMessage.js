import { NextResponse } from "next/server"


export const responseMessage = (message , statusCode , successStatus , data)=>{
 return NextResponse.json(
    {
        message : message,
        success : successStatus,
        data : data || null
        },
        {
        status : statusCode
        }
 );
}