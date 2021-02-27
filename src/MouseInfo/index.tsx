import useMouseInfo from '../useMouseInfo';

const MouseInfo: React.FC = (props) => {
  const { children } = props;
  const mouseInfo = useMouseInfo();
  if (children) {
    if (typeof children === 'function') return children(mouseInfo);
    return children;
  }
  return null;
};

export default MouseInfo;
