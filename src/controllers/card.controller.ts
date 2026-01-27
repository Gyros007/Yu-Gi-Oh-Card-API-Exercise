import { Request, Response } from "express";
import { Card, MonsterCard, SpellCard, TrapCard } from "../models/card.model";
import { Error } from "mongoose";
import { MongoServerError } from "mongodb";

export const createCard = async (req: Request, res: Response) => {
  try {
    const card = await Card.create(req.body);
    res.status(201).json(card);
  } catch (error: unknown) {
    if (error instanceof Error || error instanceof MongoServerError) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unknown error" });
    }
  }
};

export const getCards = async (req: Request, res: Response) => {
  try {
    const cards = await Card.find({});
    res.status(200).json(cards);
  } catch (error: unknown) {
    if (error instanceof Error || error instanceof MongoServerError) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unknown error" });
    }
  }
};

export const getCard = async (req: Request, res: Response) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.json(card);
  } catch (error: unknown) {
    if (error instanceof Error || error instanceof MongoServerError) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unknown error" });
    }
  }
};

export const updateCard = async (req: Request, res: Response) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }

    let updatedCard;

    switch (card.card_type) {
      case "Monster Card":
        updatedCard = await MonsterCard.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
            runValidators: true,
            strict: "throw",
          }
        );
        break;
      case "Spell Card":
        updatedCard = await SpellCard.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
            runValidators: true,
            strict: "throw",
          }
        );
        break;
      case "Trap Card":
        updatedCard = await TrapCard.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
            runValidators: true,
            strict: "throw",
          }
        );
        break;
    }
    res.json(updatedCard);
  } catch (error: unknown) {
    if (error instanceof Error || error instanceof MongoServerError) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unknown error" });
    }
  }
};

export const deleteCard = async (req: Request, res: Response) => {
  try {
    const card = await Card.findByIdAndDelete(req.params.id);
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.json({ message: "Card deleted successfully" });
  } catch (error: unknown) {
    if (error instanceof Error || error instanceof MongoServerError) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unknown error" });
    }
  }
};
