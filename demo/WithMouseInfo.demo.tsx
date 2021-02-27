import { withMouseInfo } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import { IMouseInfoContext } from '../src/MouseInfoContext/types';
import LogProps from './LogProps';

type Props = {
  mouseInfo: IMouseInfoContext
}

const WithMouseInfo: React.FC<Props> = (props) => {
  const { mouseInfo } = props;
  return LogProps(mouseInfo);
};

export default withMouseInfo(WithMouseInfo);
