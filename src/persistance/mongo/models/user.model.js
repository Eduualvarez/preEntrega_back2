import mongoose from "mongoose"
const userCollection = "Users"
const userSchema = new mongoose.Schema({
        
    first_name: String,
    last_name: String,
    email: String,
    email:{type: String,
        unique: true,
    },
    password: String,
    role: {
        type: String,
        default : "user",
    },
    cart: {type: mongoose.Schema.Types.ObjectId, ref: "Carts" }
});

export const userModel  = mongoose.model(userCollection, userSchema)