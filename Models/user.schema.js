import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    role: String,
    token:String,
})

const User = mongoose.model("User", userSchema)

export default User;