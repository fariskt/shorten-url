import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import shortenURlRoute from './routes/shortenUrl.js'
import mongoose from 'mongoose'
const app = express()
dotenv.config()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(express.json())

app.use("/api/shortenURL", shortenURlRoute)

mongoose.connect(process.env.MONGO_URI)
app.listen(5000, ()=> {
    console.log("Server connected to port 5000")
})