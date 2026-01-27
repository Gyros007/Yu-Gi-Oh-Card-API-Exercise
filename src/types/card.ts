import { IMonster } from "./monster";
import { ISpell } from "./spell";
import { ITrap } from "./trap";

export const CardType = ["Monster Card", "Spell Card", "Trap Card"] as const;
type ICardType = (typeof CardType)[number];

type ICardImage = {
  image_url: string;
  image_url_small: string;
  image_url_cropped: string;
};

export type IBaseCard = {
  name: string;
  card_type: ICardType
  desc: string;
  card_images: ICardImage[];
};

export type ICard = IMonster | ISpell | ITrap;
