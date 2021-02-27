import { createContext } from 'react';
import { IMouseInfoContext } from './types';

const MouseInfoContext = createContext<IMouseInfoContext>({} as IMouseInfoContext);

export default MouseInfoContext;
