import React from 'react';
import MouseInfoContext from '../MouseInfoProvider/context';

const withMouseInfo = (PassedComponent) => {
  const MouseInfoWrap = (props) => {
    return (
      <MouseInfoContext.Consumer>
        {(context) => {
          return (
            <PassedComponent
              {...{
                ...props,
                ...context,
              }}
            />
          );
        }}
      </MouseInfoContext.Consumer>
    );
  };
  return MouseInfoWrap;
};

export default withMouseInfo;
