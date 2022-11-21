export enum TToasts {
  error, success, warning, info
}

export interface IToastData {
  title: string;
  content: string;
  show?: boolean;
  type?: TToasts;
  progressWidth?: string;
}
