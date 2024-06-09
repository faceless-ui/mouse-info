import React from 'react';
import { useMouseInfo } from '../useMouseInfo/index.js';

export const withMouseInfo = <P extends Record<string, unknown>>(
  PassedComponent: React.ComponentType<P>,
): React.FC<P> => {
  const MouseInfoWrap: React.FC<P> = (props) => {
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
