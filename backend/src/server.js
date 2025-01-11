import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import router from './routes/TodoRoutes.js'


const app = express()

app.use(cors())
app.use(express.json())

const PORT = 5000
app.use('/api',router)

const startServer = async()=>{
    try {
        await connectDB();
    app.listen(PORT,()=>{
        console.log(`Connected server at ${PORT}`)
    })
    } catch (error) {
        console.log('error starting server')
    }
}

startServer()