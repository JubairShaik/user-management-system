// import mongoose from "mongoose";


// const DbCon = async()=>{
//     try {
//         await mongoose.connect(process.env.MONGODB)
//         console.log("MongoDB is connected")
//     } catch (error) {
//         console.log(error)
//     }
// }

// export default DbCon
import mongoose from 'mongoose';

const DbCon = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: { version: '1', strict: true, deprecationErrors: true }
    });
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
  }
};

export default DbCon;
