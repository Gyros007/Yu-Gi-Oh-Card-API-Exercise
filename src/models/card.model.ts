import { Schema, model } from "mongoose";
import { CardType, ICard } from "../types/card";
import {
  IMonster,
  MonsterAtribure,
  MonsterRace,
  MonsterTypes,
} from "../types/monster";
import { ISpell, SpellRaces } from "../types/spell";
import { ITrap, TrapRaces } from "../types/trap";

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
    desc: { type: String, required: true, minlength: 10, maxlength: 1000 },
    card_images: {
      type: [
        {
          image_url: { type: String, required: true },
          image_url_small: { type: String, required: true },
          image_url_cropped: { type: String, required: true },
        },
      ],
      required: false,
    },
    card_type: {
      type: String,
      enum: {
        values: CardType,
        message:
          "Card type `{VALUE}` is not valid. Must be one of: Monster Card, Spell Card, Trap Card",
      },
      required: true,
    },
  },
  { timestamps: true, discriminatorKey: "card_type" }
);

export const Card = model<ICard>("Card", cardSchema);

// Monster schema (discriminator)
const monsterSchema = new Schema<IMonster>({
  type: {
    type: String,
    enum: {
      values: MonsterTypes,
      message:
        "Type `{VALUE}` is not valid. Must be one of: " +
        MonsterTypes.join(", "),
    },
    required: true,
  },
  race: {
    type: String,
    enum: {
      values: MonsterRace,
      message:
        "Race `{VALUE}` is not valid. Must be one of: " +
        MonsterRace.join(", "),
    },
    required: true,
  },
  atk: { type: Number, min: 0, max: 5000, required: true },
  def: { type: Number, min: 0, max: 5000, required: true },
  level: { type: Number, min: 0, max: 12, required: true },
  attribute: {
    type: String,
    enum: {
      values: MonsterAtribure,
      message:
        "Attribute `{VALUE}` is not valid. Must be one of: " +
        MonsterAtribure.join(", "),
    },
    required: true,
  },
});

// Spell schema (discriminator)
const spellSchema = new Schema<ISpell>({
  race: {
    type: String,
    enum: {
      values: SpellRaces,
      message:
        "Race `{VALUE}` is not valid. Must be one of: " + SpellRaces.join(", "),
    },
    required: true,
  },
});

// Trap schema (discriminator)
const trapSchema = new Schema<ITrap>({
  race: {
    type: String,
    enum: {
      values: TrapRaces,
      message:
        "Race `{VALUE}` is not valid. Must be one of: " + TrapRaces.join(", "),
    },
    required: true,
  },
});

// Create discriminators
export const MonsterCard = Card.discriminator<IMonster>(
  "Monster Card",
  monsterSchema
);
export const SpellCard = Card.discriminator<ISpell>("Spell Card", spellSchema);
export const TrapCard = Card.discriminator<ITrap>("Trap Card", trapSchema);
