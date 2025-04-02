import jwt from "jsonwebtoken";
import { config } from "../config/envs.config.js";


export const createToken = (data)=>{
    return jwt.sign(data,config.JWT_SECRET, {expiresIn: "5m"})
};

export const verifyToken = (token) =>{
    return jwt.verify(token, config.JWT_SECRET)
}