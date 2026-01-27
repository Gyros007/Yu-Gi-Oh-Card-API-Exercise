import { IBaseCard } from "./card";

export const TrapRaces = ["Continuous", "Counter", "Normal"] as const;
type IRace = (typeof TrapRaces)[number];

export type ITrap = IBaseCard & {
  race: IRace;
};
