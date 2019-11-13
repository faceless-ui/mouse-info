import React from 'react';
import MousePositionContext from '../MousePositionProvider/context';

const withMousePosition = (PassedComponent) => {
  const MousePositionWrap = (props) => {
    return (
      <MousePositionContext.Consumer>
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
      </MousePositionContext.Consumer>
    );
  };
  return MousePositionWrap;
};

export default withMousePosition;
