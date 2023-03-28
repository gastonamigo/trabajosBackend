import { Router } from "express";
import userModel from "../models/user.model.js";

const userRouter = Router();

userRouter.get('/', async (req,res)=>{
    const users = await userModel.find();

    res.send({ status: "ok", playload: users});
});

userRouter.post('/', async(req,res)=>{
    const {first_name, last_name, email} = req.body;
    try{
        const createdUser = await userModel.create({
            first_name, 
            last_name,
            email,
        });

        res.status(201).send({ status: "ok", playload: createdUser });
    } catch(err){
        res.status(500).send({status: "error", playload: err.message });
    }
   
    
});

userRouter.put('/:userId', async (req,res)=>{
    const {userId} = req.params;
    const updatedData = req.body;

    const updatedUser = await  userModel.findOneAndUpdate(
        {_id: userId}, 
        updatedData, 
        {new: true}
        );
    res.status(200).send({status: "ok", playload: updatedUser});
});

userRouter.delete('/', (req,res)=>{
    //todo
});

export default userRouter;