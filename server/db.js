import mongoose from "mongoose";
import { MONGODB_URI } from "./config";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_URI)
        console.log(`MongoDB connected: ${conn.connection.name}`)
    } catch (error) {
        console.log('Error: ', error.message)
        process.exit(1)
    }
}