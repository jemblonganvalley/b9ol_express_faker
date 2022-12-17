import express from "express"
import dotenv from "dotenv"
import user_routes from "./routes/user_routes"
import cors from "cors"
dotenv.config()

const { PORT } = process.env
const app = express()

// middleware 
app.use(cors({
    origin: ["http://localhost:5173"]
}))
app.use(express.json())


// route
app.use(user_routes)

// listener
app.listen(PORT, () => {
    console.info("server berhasil dijalankan..")
})