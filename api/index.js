import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

// Connect to Database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database Connected!"))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

// Start the app

const app = express();

// Add Thirdparty middleware for json, cookie-parser
app.use(express.json());
app.use(cookieParser());

// Connect the base route to the router to be called
app.get("/", (req, res) => {
  res.status(201).json({ message: "First test" });
});

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () =>
  console.log("Server is listening on: Port " + String(process.env.PORT))
);

// Custom Middleware that sends an error I think
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
