import mongoose from "mongoose";
import { configDotenv } from "dotenv";

const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO)
    } catch (error) {
        throw new Error("Connection Failed")
    }
}


export default connect;