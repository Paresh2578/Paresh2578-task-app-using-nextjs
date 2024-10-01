
// import mongoose from "mongoose";

// export default connectDB = async () => {
//     try {
//         const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
//         dbName: "work_manager",
//         });
    
//         console.log("db connected...");
//         console.log("connected with host ", connection.host);
//     } catch (error) {
//         console.log("failed  to connect with database");
//         console.log(error);
//     }
// };


// /src/app/lib/db.js

import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGO_DB_URL

if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env',
    )
}

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        }
        cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
            console.log('Db connected')
            return mongoose
        })
    }
    try {
        cached.conn = await cached.promise
    } catch (e) {
        cached.promise = null
        throw e
    }

    return cached.conn
}

export default dbConnect