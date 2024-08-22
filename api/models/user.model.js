import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type:String,
        required:true,
        unique:true
    },

    password: {
        type: String,
        required: true
    },
    profilePicture:{
        type:String,
        default: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1724339703~exp=1724343303~hmac=57416d9b469e467d64864860f886bfdde1439e97000977cc737627fe574585a6&w=740"
    },

}, {timestamps: true});

const User = mongoose.model('User', userSchema)

export default User;