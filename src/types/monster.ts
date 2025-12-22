import { IBaseCard } from "./card";

export const MonsterTypes = [
  "Effect Monster",
  "Flip Effect Monster",
  "Fusion Effect Monster",
  "Fusion Monster",
  "Normal Monster",
  "Ritual Effect Monster",
  "Ritual Monster",
  "Toon Monster",
  "Toon Effect Monster",
] as const;
type IType = (typeof MonsterTypes)[number];

export const MonsterRace = [
  "Aqua",
  "Beast",
  "Beast-Warrior",
  "Dinosaur",
  "Dragon",
  "Fairy",
  "Fiend",
  "Fish",
  "Insect",
  "Machine",
  "Plant",
  "Pyro",
  "Reptile",
  "Rock",
  "Sea Serpent",
  "Spellcaster",
  "Thunder",
  "Warrior",
  "Winged Beast",
  "Zombie",
] as const;
type IRace = (typeof MonsterRace)[number];

export const MonsterAtribure = [
  "DARK",
  "LIGHT",
  "EARTH",
  "WATER",
  "FIRE",
  "WIND",
] as const;
type IAttribute = (typeof MonsterAtribure)[number];

export type IMonster = IBaseCard & {
  type: IType;
  race: IRace;
  atk: number;
  def: number;
  level: number;
  attribute: IAttribute;
};
