import React, { useContext } from 'react';
import MouseInfoContext from '../MouseInfoProvider/context';

const withMouseInfo = (PassedComponent) => {
  const MouseInfoWrap = (props) => {
    const context = useContext(MouseInfoContext);
    return (
      <PassedComponent
        {...{
          ...props,
          ...context,
        }}
      />
    );
  };
  return MouseInfoWrap;
};

export default withMouseInfo;
