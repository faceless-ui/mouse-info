import React from 'react';
import useMouseInfo from '../useMouseInfo';

const withMouseInfo = <P extends Record<string, unknown>>(
  PassedComponent: React.ComponentType<P>,
): React.FC<P> => {
  const MouseInfoWrap = (props) => {
    const mouseInfoContext = useMouseInfo();

    return (
      <PassedComponent
        {...{
          ...props,
          mouseInfo: mouseInfoContext,
        }}
      />
    );
  };
  return MouseInfoWrap;
};

export default withMouseInfo;
