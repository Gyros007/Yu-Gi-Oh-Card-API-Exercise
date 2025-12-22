import { IBaseCard } from "./card";

export const SpellRaces = ["Continuous", "Equip", "Field", "Normal", "Ritual", "Quick-Play"] as const;
type IRace = (typeof SpellRaces)[number];

export type ISpell = IBaseCard & {
  race: IRace;
};
