import express from 'express';
import mongoose from 'mongoose';
import router from './controllers/sinhvien.js';
import auth from './controllers/auth.js';
const app = express();
const connect = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/sinhvien")
        console.log("connect successfully");    
    } catch (error) {
        console.log("connect to fail");
    }
}
app.use(express.json())
app.use('/',router)
app.use('/',auth)

app.listen(4000,async()=>{
    await connect()
    console.log(`Listening on port 4000`);
})