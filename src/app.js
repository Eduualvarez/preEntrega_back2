import express from "express"

const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT;

app.listen(process.env.PORT,() => {
    console.log(`http://localhost:${PORT}`)
})