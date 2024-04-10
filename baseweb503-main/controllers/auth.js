import express from "express";
import bcryptjs from "bcryptjs";
import { User } from "../models/auth.js";

const auth = express.Router();
auth.post("/dangki", async (res, req) => {
  try {
   const hashPasswrod = await bcryptjs.hash(req.body.password,10)
   const data =  await User.create({
    message : "đăng ký thành công",
    email : req.body.email,
    password : hashPasswrod
   })
    res.status(200).json({message:"Đăng kí thành công", 
   data:data})
  } catch (error) {
    console.log(error);
  }
});
export default auth
