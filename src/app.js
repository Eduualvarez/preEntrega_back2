import express from "express"
import { mongoDB_Connection } from "./config/mongoDB.connection.js";
import { config } from "./config/envs.config.js";
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

await mongoDB_Connection()
const PORT = config.PORT

app.listen(process.env.PORT,() => {
    console.log(`http://localhost:${PORT}`)
})