import { useContext } from 'react';
import MouseInfoContext from '../MouseInfoContext';
import { IMouseInfoContext } from '../MouseInfoContext/types';

const useMouseInfo = (): IMouseInfoContext => useContext(MouseInfoContext);

export default useMouseInfo;
