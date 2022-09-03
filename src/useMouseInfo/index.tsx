import { useContext } from 'react';
import MouseInfoContext, { IMouseInfoContext } from '../MouseInfoProvider/context';

const useMouseInfo = (): IMouseInfoContext => useContext(MouseInfoContext);

export default useMouseInfo;
