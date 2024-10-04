import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server';

export async function middleware(request) {
    let token = request.cookies.get("authToken")?.value;

    // Define routes that do not require authentication
    const allowRoutes = ["/api/login", "/api/signup"];

    // Allow login and signup API routes to be accessed without a token
    if (allowRoutes.includes(request.nextUrl.pathname)) {
        return NextResponse.next();
    }

    // If token not found
    if (!token) {
        if (request.nextUrl.pathname.startsWith("/api")) {
            return NextResponse.json({ message: "Unauthorized", success: false }, { status: 401 });
        }

        // Only redirect if not on /login or /signup
        if (!request.nextUrl.pathname.startsWith("/login") && !request.nextUrl.pathname.startsWith("/signup")) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
        return NextResponse.next(); // Allow access to login/signup if no token
    }

    // If user is logged in and tries to access login or signup
    if (request.nextUrl.pathname.startsWith("/login") || request.nextUrl.pathname.startsWith("/signup")) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const { payload } = await jwtVerify(token, secret);

        // Verify user ID
        if (!payload.id) {
            return NextResponse.json({ message: "Unauthorized", success: false }, { status: 401 });
        }

        // Add user information to headers
        const response = NextResponse.next();
        response.headers.set('user-id', payload.id); // Set user ID in a custom header

        return response; // Continue to the requested route
    } catch (error) {
        if (request.nextUrl.pathname.startsWith("/api")) {
            return NextResponse.json({ message: "Unauthorized", success: false }, { status: 401 });
        }
        return NextResponse.redirect(new URL("/login", request.url));
    }
}

// Matching API routes
export const config = {
    matcher: ['/api/:path*', '/', '/task/:path*', '/login', '/signup'],
};
