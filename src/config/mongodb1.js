import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()


const connectDB1 = async () => {
    try {
       const connection = await mongoose.createConnection(process.env.MONG0DBCONNECTIONSTRING1)
      console.log('MongoDB connected For authentication ')
      return connection;
    } catch (error) {
        console.log('MongoDB connection error', error)
    }
    
}
 
export default connectDB1;