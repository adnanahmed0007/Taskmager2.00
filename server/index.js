import express from 'express';
const port = 8765;
const app = express();
const url = "mongodb://localhost:27017/admin";
import mongoose from "mongoose";
import AuthRoutes from "./routes/AuthRoutes.js";
import TaskRoute from "./routes/TaskRoute.js";
import cookieParser from 'cookie-parser';
import cors from "cors";
 
 
app.use(cors({
    origin: ["http://localhost:5173"],   
    credentials: true,  
    methods: ["GET", "POST", "PUT", "DELETE"],   
    allowedHeaders: ["Content-Type", "Authorization"]
}));
 
app.use(express.json());
app.use(cookieParser());
 
app.use("/api/auth", AuthRoutes);
app.use("/", TaskRoute);
 


 
async function ConnectnongoDb() {
    const chcek = await mongoose.connect(url);
    if (chcek) {
        console.log(`We are connected to the database  ${url}`);
    } else {
        console.log("We are not connected to the database");
    }
}

ConnectnongoDb()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    })
    .catch(e => {
        console.log(e);
    });
