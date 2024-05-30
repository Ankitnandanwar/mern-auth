import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    profilePicture:{
        type: String,
        default: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1717063153~exp=1717066753~hmac=fa2d617e21cf0181051cda855855e651df771b8b6ed8953f5692eba0f873d397&w=740",
    },

}, {timestamps: true})

const User = mongoose.model('User', userSchema);

export default User;