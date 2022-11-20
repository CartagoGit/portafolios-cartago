export type TLink = 'email' | 'external' | 'internal';

export interface IExternalLinks {
  text: string;
  field: string;
  link: string;
  image: string;
  type: TLink;
  iconClass: string;
}

export interface IWebOwner {
  name: string;
  subname: string;
  nick: string;
  subnick: string;
  completeName(): string;
  completeNick(): string;
}
