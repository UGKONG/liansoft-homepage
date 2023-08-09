// Modules
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

// Valiables
const app = express();
const port = process.env.SERVER_PORT || 8080;

// Settings
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

// Middlewares
app.use("/", express.static(__dirname + "/build"));

// Server Start
app.listen(port, () => console.log("Server Started."));
