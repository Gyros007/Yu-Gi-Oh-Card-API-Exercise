import express from "express";
import {
  createCard,
  getCards,
  getCard,
  updateCard,
  deleteCard,
} from "../controllers/card.controller";
const router = express.Router();

// Add new card
router.post("/", createCard);

// Get all cards
router.get("/", getCards);

// Get card by ID
router.get("/:id", getCard);

// Update card
router.put("/:id", updateCard);

// Delete card
router.delete("/:id", deleteCard);

export default router;