import mongoose from "mongoose";
export default async function connectDB () {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL);

    console.log("db connected...");


    console.log("connected with host ", connection.host);
  } catch (error) {
    console.log(error);
    //  throw new Error("DB connection failed");
  }
};
