import { ILinks } from "./links.interfaces";
import { ITechs } from "./techs.interface";

export interface IAuthor {
  _id: string | number;
  name: string;
  image?: string;
  links?: ILinks;
  techs?: ITechs;
}


