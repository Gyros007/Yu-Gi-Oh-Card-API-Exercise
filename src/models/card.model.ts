import { Schema, model } from "mongoose";
import { ICard } from "../types/card";

const cardSchema = new Schema<ICard>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 56,
    },
    type: { type: String, enum: ["monster", "spell", "trap"], required: true },
  },
  { timestamps: true }
);

export const Card = model<ICard>("Card", cardSchema);
