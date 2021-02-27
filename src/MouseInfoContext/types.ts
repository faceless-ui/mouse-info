export interface IMouseInfoContext {
  x: number,
  y: number,
  xDifference: number,
  yDifference: number,
  xDirection: 'left' | 'right',
  yDirection: 'up' | 'down',
  xPercentage: number,
  yPercentage: number,
  totalPercentage: number,
  isInViewport: boolean,
  eventsFired: number,
  animationScheduled: boolean,
}
