import mongoose from "mongoose";

const pschema = mongoose.Schema({
    Name: String,
    Age: Number,
    email: {
        type: String,
        unique: true
    },
    Phone: String
},
{
    timestamp: true
})
export const Product = mongoose.model('danh sach',pschema)
