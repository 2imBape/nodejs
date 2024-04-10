import mongoose from "mongoose";

const schema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password:{
        type : String,
    }
}
)

export const User = mongoose.model("user",schema)