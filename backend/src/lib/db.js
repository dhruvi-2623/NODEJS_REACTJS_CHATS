import mongoos from "mongoose";

export const connectDB = async ()=>{
    try{
        const conn = await mongoos.connect(process.env.MONGODB_URI);
        console.log(`mongDB connected: ${conn.connection.host}`);
    }catch(error){
        console.log("mongoDB connection error:", error);
    }
};