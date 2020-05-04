import PropTypes from 'prop-types';
import { withMouseInfo } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import LogProps from './LogProps';

const WithMouseInfo = (props) => {
  const { mouseInfo } = props;
  return LogProps(mouseInfo);
};

WithMouseInfo.defaultProps = {};

WithMouseInfo.propTypes = {
  mouseInfo: PropTypes.shape({}).isRequired,
};

export default withMouseInfo(WithMouseInfo);
