
//? Tecnologias usadas en cada proyecto o explicadas por cada autor
export interface ITechs {
  frontend?: IFrontend;
  backend?: IBackend;
}

interface IBackend {
  framework?: TFrameworkBack | TFrameworkBack[];
  language: TLanguageBack | TLanguageBack[];
  libreries?: TLib | TLib[];
  methodology?: TMethodology | TMethodology[];
}
interface IFrontend {
  framework?: TFrameworkFront | TFrameworkFront[];
  language: TLanguageFront | TLanguageFront[];
  libreries?: TLib | TLib[];
  methodology?: TMethodology | TMethodology[];
  tag: TTag | TTag[];
  style: TStyle | TStyle[];
}

export type TFrameworkFront =
  | 'Angular'
  | 'ReactJs'
  | 'VueJs'
  | 'NextJs'
  | 'Unity'
  | 'iOnic'
  | 'ReactNative'
  | 'Xamarin';
export type TLanguageFront = 'JavaScript' | 'TypeScript' | 'C#';

export type TFrameworkBack = 'Laravel' | 'Symfony' | 'Spring' | 'NodeJs';
export type TLanguageBack =
  | 'JavaScript'
  | 'TypeScript'
  | 'Php'
  | 'Python'
  | 'Solidity'
  | 'Java';

export type TTag = 'HTML';
export type TStyle = 'Css' | 'Scss' | 'Sass' | 'Less' | 'Bootstrap' | 'Tailwind';
export type TLib =
  | 'ExpressJs'
  | 'Mongoose'
  | 'OpenZeppelin'
  | 'MomentJs'
  | 'ViteJs'
  | 'NxJs'
  | 'RxJs'
  | 'NgRx'
  | 'Redux';

export type TMethodology =
  | 'Scrum'
  | 'Kanban'
  | 'Extreme Programming - XP'
  | 'Modelo vista controlador (MVC)';
