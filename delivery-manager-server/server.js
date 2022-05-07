/**
 * Module dependencies
 */
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import deliveriesRouter from "./routers/deliveriesRouter.js";

/**
 * configuring dotenv to load environment variables from .env file
 */
dotenv.config();

/**
 * Creating Express server instance and making configurations
 */
const app = express();
// body parser middleware
app.use(bodyParser.json());
// cors for cross origin resource sharing
app.use(cors());
app.use(express.json());

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
 * Linking the deliveries router
 */
app.use("/deliveries", deliveriesRouter);

/**
 * Listen on provided port
 */
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
