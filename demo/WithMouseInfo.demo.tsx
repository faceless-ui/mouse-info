import { withMouseInfo } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import { IMouseInfoContext } from '../src/MouseInfoContext';
import LogProps from './LogProps';

const WithMouseInfo: React.FC<{
  mouseInfo: IMouseInfoContext
}> = (props) => {
  const { mouseInfo } = props;
  return LogProps(mouseInfo);
};

export default withMouseInfo(WithMouseInfo);
