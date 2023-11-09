const express=require("express")
const { UserModel } = require("../models/user.model")

const userRouter=express.Router()

userRouter.post("/add",async(req,res)=>{
    // const {name,email,place}=req.body;
    try {
        const user=new UserModel(req.body)
        await user.save()
        // console.log(req.body)
        res.status(200).send({"msg":"Add the data successfully","data":user})
    } catch (error) {
        res.status(400).send({"msg":"Something error is occured"})
    }
})

// Read all users
userRouter.get('/', async (req, res) => {
    try {
      const users = await UserModel.find();
      res.status(200).send({"msg":"getting the details","data":users});
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // Update a user
  userRouter.patch('/:id', async (req, res) => {
    try {
      const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(200).send({"msg":"Update the details","data":user});
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Delete a user
  userRouter.delete('/:id', async (req, res) => {
    try {
      const user = await UserModel.findByIdAndDelete(req.params.id);
      res.status(200).send({"msg":"Delete the details","data":user});
    } catch (error) {
      res.status(500).send(error);
    }
  });

module.exports={
    userRouter
}