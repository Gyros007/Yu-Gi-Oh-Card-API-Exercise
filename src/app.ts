import express from "express";
import mongoose from "mongoose";
import cardRoute from "./routes/card.route";
const app = express();
app.use(express.json());

// routes
app.use("/api/cards", cardRoute)


const PORT = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/test";

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

async function connectDB() {
  try {
    await mongoose.connect(mongoUrl);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
}

connectDB();
