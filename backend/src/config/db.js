import mongoose from 'mongoose'


const connectDB = async ()=>{
    try {
         await mongoose.connect('mongodb+srv://imran:imran@cluster0.iqc9rq5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
         console.log('DB connected')
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

export default connectDB