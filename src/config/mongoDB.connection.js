import mongoose from "mongoose"
import { config } from "./envs.config.js";

const password = config.MONGO_PASSWORD;
const db_name = config.MONGO_DB
export const mongoDB_Connection = async () => {
    try {
       mongoose.connect(`mongodb+srv://${db_name}:${password}@cluster0.hnr7u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`),
       console.log("connected to DB")
    } catch (error){
        console.log(`error ${error}`)
    }
}