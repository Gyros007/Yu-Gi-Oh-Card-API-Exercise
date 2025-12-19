export type ICardType = 'monster' | 'spell' | 'trap';

export type ICard = {
  name: string;
  type: ICardType;
};
