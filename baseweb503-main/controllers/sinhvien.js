import express from "express"
import { Product } from "../models/sinhvien.js";
import { validate } from "../validation/sinhvien.js";
const router = express.Router();
router.get("/danhsach", async(req,res)=> {
    try {
        const response = await Product.find()
    res.status(200).json({message:"Lay danh sach thanh cong", data:response})
    } catch (error) {
        res.status(400).json({message:"Lay danh sach that bai"})
    }
    
})
router.get("/danhsach/:id", async(req,res)=> {
    try {
        const response = await Product.findById(req.params.id)
        res.status(200).json({message:"Lay chi tiet danh sach thanh cong", data:response})
    } catch (error) {
        res.status(400).json({message:"Id khong ton tai"})
    }
    
})
router.post("/them",validate, async(req,res)=> {
    try {
        const response = await new Product(req.body).save()
        res.status(200).json({message:"Them sinh vien thanh cong", data:response})
    } catch (error) {
        res.status(400).json({message:"Them that bai"})
    }
   
})
router.put("/danhsach/:id",validate, async(req,res)=> {
    try {
        const response = await Product.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        res.status(200).json({message:"Cap nhat sinh vien thanh cong", data:response})
    } catch (error) {
        res.status(400).json({message:"Cap nhat that bai"})
    }
   
})
router.delete("/danhsach/:id", async(req,res)=> {
    try {
        const response = await Product.findOneAndDelete({_id:req.params.id})
        res.status(200).json({message:"Xoa sinh vien thanh cong", data:response})
    } catch (error) {
        res.status(400).json({message:"Xoa that bai"})
    }
   
})


export default router;
