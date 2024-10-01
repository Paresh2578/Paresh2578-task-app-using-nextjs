import { NextResponse } from "next/server";

export function middleware(request){

    //token get from cookie
    let token = request.cookies.get("authToken")?.value;

    // allow request to continue for some routes
    let allowRoutes = ["/api/login", "/api/signup"];
    if(allowRoutes.includes(request.nextUrl.pathname)){
        return;
    }

    //if token not found
    if(!token){
        if(request.nextUrl.pathname.startsWith("/api")){
            return NextResponse.json({message : "Unauthorize", success : false}, {status : 401});
        }
        return NextResponse.redirect("/login");
    }

}


// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/api/*'],
  }