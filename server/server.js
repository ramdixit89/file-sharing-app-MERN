import express from "express";
import mongoose from "mongoose";
import router from "./routers/routes.js";
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
//Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
//routes middleware
app.use('/', router);

const PORT = process.env.PORT || 8000;


//Database connection
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( ()=>{
    console.log("Mongodb successfully connected!")
}).catch( ()=>{
    console.log("Error in connection",error);
});

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
});