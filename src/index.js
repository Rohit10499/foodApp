import dotenv from "dotenv"
import connectDB from "./db/Index.js";
import { app } from "./app.js";
dotenv.config({
  path:'./.env'
})


connectDB().then(()=>{
    app.listen(process.env.PORT ,()=>{
        console.log(`Serveer is running at port :${process.env.PORT}`)
    })
}).catch((err)=>{
  console.log("Mongo DB connected Faild !!!!",err)
})