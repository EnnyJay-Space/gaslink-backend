import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

// const express = require("express");
// const dotenv = require("dotenv");
// const connectDB = require("./src/config/db");
// const authRoutes = require("./src/routes/authRoutes");
// const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => res.send("Your GasLink API is running..."));

export default app;
