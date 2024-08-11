import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()


const connectDB = async () => {
    try {
       const connection = await mongoose.connect(process.env.MONG0DBCONNECTIONSTRING)
      console.log('MongoDB connected')
      return connection;
    } catch (error) {
        console.log('MongoDB connection error', error)
    }
}
 
export default connectDB;