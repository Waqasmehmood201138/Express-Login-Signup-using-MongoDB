import express from "express";
const userRoute = express.Router();
import User from "../models/User.mjs"



userRoute.get("/", async (req, res) => {

    try {
        const getUser = await User.find();
        res.json(getUser)
        // console.log(getUser.length)
    } catch (err) {
        console.log(err)
    }
})

userRoute.post("/", async (req, res) => {
    try {
        const userSave = await User.create({

            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            password: req.body.password,
            address: req.body.address
        })

        res.send(userSave.name)
        // console.log(userSave)
    }
    catch (err) {
        console.log(err)
    }

})

userRoute.post('/login', async (req, res) => {


    try {
        const { email, password } = req.body;
        const check = await User.find({ email, password });
        if (check[0].email != email || check[0].password != password) {
            res.send("Invalid Credential")
        } else {
            res.send(`${check[0].name} logged In Successfully ....`)
        }

    } catch (err) {
        console.log(err)

    }
})

// How to Delete User
userRoute.delete("/:id", async (req, res) => {

    const deleteUser = await User.findByIdAndDelete(req.params.id)
    res.send(deleteUser)

})

// How to edit User

userRoute.put("/:id", async (req, res) => {

    try {

        const updateUser = await User.updateOne(
            { _id: req.params.id },

            {
                $set: {

                    name: req.body.name,
                    email: req.body.email,
                    age: req.body.age,
                    password: req.body.password,
                    address: req.body.address
                }
            }

        )
if(updateUser.modifiedCount === 1){

    res.send(`User ${req.body.name} Updated Successdully ...`)
}
    } catch (error) {
        console.log(error)
    }
})




export default userRoute;