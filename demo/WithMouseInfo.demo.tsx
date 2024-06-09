import { withMouseInfo } from '@faceless-ui/mouse-info';
import type { IMouseInfoContext } from '../src/types.js';
import LogProps from './LogProps.js';

const WithMouseInfo: React.FC<{
  mouseInfo: IMouseInfoContext
}> = (props) => {
  const { mouseInfo } = props;
  return LogProps(mouseInfo);
};

export default withMouseInfo(WithMouseInfo);
