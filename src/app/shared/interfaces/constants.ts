export interface IExternalLinks {
  email: string;
  github: string;
  portafolios: string;
  linkedin: string;
  certificatesGithub: string;
}

export interface IWebOwner {
  name: string;
  subname: string;
  nick: string;
  subnick: string;
  completeName(): string;
  completeNick(): string;
}
