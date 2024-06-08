import { useContext } from 'react';
import { MouseInfoContext, type IMouseInfoContext } from '../MouseInfoProvider/context.js';

export const useMouseInfo = (): IMouseInfoContext => useContext(MouseInfoContext);
