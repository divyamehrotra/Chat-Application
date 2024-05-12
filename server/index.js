const express = require('express')
const dotenv = require('dotenv')
const {default:mongoose} = require('mongoose')
const userRoutes = require('./routes/userRoutes');

const app = express()
dotenv.config();

app.use(express.json())

mongoose.connect(process.env.MONGO_URI);
const connectdb = async()=>{
    try{    
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    }catch(error){
        console.log("Server is not connected to Database",error.message)
    }
}
connectdb();

app.get("/",(req,res)=>{
    res.send("API is running")
})
app.use("/user",userRoutes);

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log('Server is running...'));