/**
 * Module dependencies
 */
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

/**
 * configuring dotenv and express object
 */
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Getting port from environment and storing into express
 */
const port = process.env.PORT || 5000;

/**
 * Creating initial endpoint to check server status
 */
app.get("/", (req, res) => {
  res.send("Server is ready.");
});

/**
 * Listen on provided port
 */
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
