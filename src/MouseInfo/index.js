import PropTypes from 'prop-types';
import useMouseInfo from '../useMouseInfo';

const MouseInfo = (props) => {
  const { children } = props;
  const mouseInfo = useMouseInfo();
  if (children && typeof children === 'function') return children(mouseInfo);
  return null;
};

MouseInfo.defaultProps = {
  children: undefined,
};

MouseInfo.propTypes = {
  children: PropTypes.func,
};

export default MouseInfo;
