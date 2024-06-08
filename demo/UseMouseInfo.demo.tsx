import { useMouseInfo } from '@faceless-ui/mouse-info';
import LogProps from './LogProps.js';

const UseMouseInfo: React.FC = () => {
  const mouseInfo = useMouseInfo();
  return LogProps(mouseInfo);
};


export default UseMouseInfo;
