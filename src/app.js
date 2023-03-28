import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/users.router.js";

const app = express();

app.use(express.json());
app.use("/api/users", userRouter);
app.listen(8080,()=>{
    console.log("server listening in port 8080");
});

mongoose.connect("mongodb+srv://gastonamigo:coder1234@servercoder.itp7dkf.mongodb.net/?retryWrites=true&w=majority").then((conn)=>{
    console.log("connected to db");
});