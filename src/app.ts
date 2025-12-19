import express, { Request, Response } from "express";
import mongoose, { Error } from "mongoose";
import { Card } from "./models/card.model";
const app = express();
app.use(express.json());

// Add new card
app.post("/api/cards", async (req: Request, res: Response) => {
  try {
    const card = await Card.create(req.body);
    res.status(201).json(card);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unknown error" });
    }
  }
});

// Get all cards
app.get("/api/cards", async (req: Request, res: Response) => {
  try {
    const cards = await Card.find({});
    res.status(200).json(cards);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unknown error" });
    }
  }
});

// Get card by ID
app.get("/api/cards/:id", async (req: Request, res: Response) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.json(card);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unknown error" });
    }
  }
});

// Update card
app.put("/api/cards/:id", async (req: Request, res: Response) => {
  try {
    const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      strict: "throw",
    });
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.json(card);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unknown error" });
    }
  }
});

// Delete card
app.delete("/api/cards/:id", async (req: Request, res: Response) => {
  try {
    const card = await Card.findByIdAndDelete(req.params.id);
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.json({ message: "Card deleted successfully" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unknown error" });
    }
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
}

connectDB();
