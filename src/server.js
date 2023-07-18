import "dotenv/config";
import express from "express";
import register from "./routes/registerRoutes";
import database from "./db/mongodb";

const app = express();

app.use(express.json());

app.use(register);

app.listen(3000);
