export interface IStates {
  isStarted: () => boolean; // solo si hay fecha de inicio
  isComplete: () => boolean; // solo si hay fecha de finalizacion
  isCourse?: () => boolean; // solo si hay algun curso
  isPersistent?: boolean;
}
