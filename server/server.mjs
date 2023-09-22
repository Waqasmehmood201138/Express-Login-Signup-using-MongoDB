import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import("dotenv/config")

import userRoute from './routes/user.mjs'


const app = express()
app.use(express.json())
app.use(cors())

app.use("/user", userRoute)

const PORT = 8081 || process.env.Port;




app.listen(PORT, () => {

    console.log(`App is listening on port ${PORT}`)
})


/////////////////////////////////////////////////////////////////////////////////////////////////

mongoose.connect('mongodb+srv://waqas201138:twostar@cluster0.wpxkiik.mongodb.net/signup?retryWrites=true&w=majority');

////////////////mongodb connected disconnected events///////////////////////////////////////////////
mongoose.connection.on('connected', function () {//connected
    console.log("Mongoose is connected");
});

mongoose.connection.on('disconnected', function () {//disconnected
    console.log("Mongoose is disconnected");
    process.exit(1);
});

mongoose.connection.on('error', function (err) {//any error
    console.log('Mongoose connection error: ', err);
    process.exit(1);
});

process.on('SIGINT', function () {/////this function will run jst before app is closing
    console.log("app is terminating");
    mongoose.connection.close(function () {
        console.log('Mongoose default connection closed');
        process.exit(0);
    });
});
////////////////mongodb connected disconnected events///////////////////////////////////////////////


