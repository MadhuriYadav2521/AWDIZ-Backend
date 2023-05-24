console.log("hello world");
import express from "express";
import morgan from "morgan";
import { Madhuri, Swaraj, Anu, Krishnan, Abhi } from './controllers/All-Controllers.js';
import router from './routes/UserRoutes.js';
import mongoose from "mongoose";

const app = express();

app.use(morgan('dev')); // use() - middleware
app.use(express.json()); // data to parse
app.use('/api/v1', router);

// mongodb connection
mongoose.connect('mongodb+srv://madhuri13:diebold123@cluster0.ay3ihrp.mongodb.net/awdizDB')
.then(() => console.log("DB Conneccted"))
.catch((err) => console.log("db error => ", err));


// app.listen(8000); // port

app.listen(8000, () => console.log("Working on port 8000")); // port
