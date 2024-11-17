const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const mongoURI = process.env.MONGO_URI;
const authRoutes = require("./routes/auth");
const usersRoutes = require("./routes/users");

const app = express();
app.use(express.json());

async function connectDB() {
  try {
    await mongoose.connect(mongoURI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error connecting to database: " + error);
  }
}
connectDB();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Main Page");
});

app.use("/api/auth", authRoutes);
app.use("/api", usersRoutes);

app.listen(PORT, () => {
  console.log(`Starting port ${PORT}`);
});
