const express=require("express");
const cors = require("cors");
const { Connection } = require("./config/db");
const { userRouter } = require("./route/user.routes");
const app=express()
require("dotenv").config()
const port=process.env.Port || 3000;
app.use(express.json())
app.use(cors())

app.use("/user",userRouter)

app.listen(port,async()=>{
    try {
        await Connection
        console.log(`Server is connected to database at port ${port}`)
    } catch (error) {
        console.log(`Server is not connected to database at port ${port}`)
    }
    console.log(`Server is running at ${port}`)
})