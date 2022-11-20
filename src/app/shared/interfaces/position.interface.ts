/**
 * ? Posiciones especificas
 */
export type TPositionTop = 'top';
export type TPositionBottom = 'bottom';
export type TPositionLeft = 'left';
export type TPositionRight = 'right';
export type TPositionTopLeft = 'top-left';
export type TPositionTopRight = 'top-right';
export type TPositionBottomLeft = 'bottom-left';
export type TPositionBottomRight = 'bottom-right';

/**
 * ? Posiciones basicas donde colocar el componente
 */
export type TPositionBasic = TPositionTop | TPositionBottom | TPositionLeft | TPositionRight;

/**
 * ? Posiciones en las esquinas donde colocar el componente
 */
export type TPositionCorners = TPositionTopLeft | TPositionTopRight | TPositionBottomLeft | TPositionBottomRight

/**
 * ? Posiciones donde colocar el componente
 */
export type TPosition = TPositionBasic | TPositionCorners;

/**
 * ? Posiciones que puede adoptar el componente de Links Sociales
 */
export type TSocialPosition = TPositionLeft | TPositionBottom
