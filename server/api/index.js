import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import userRoutes from './routes/user.routes.js'
dotenv.config();

mongoose.connect('mongodb+srv://zalishmahmud6:GoBq3fJbeRsi7td2@mern.swtv2jg.mongodb.net/user-auth?retryWrites=true&w=majority')
.then(() => {
    console.log("Connected to Mongo");
})
.catch((err)=> {
    console.log(err);
})


const app = express();


app.listen(3000, ()=> {
    console.log("Server listening on port 3000");
})

app.use('/api/user',userRoutes)