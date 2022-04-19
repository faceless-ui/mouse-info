import React, { Fragment } from 'react';
import { IMouseInfoContext } from '../MouseInfoContext';
import useMouseInfo from '../useMouseInfo';

export type ChildFunction = (context: IMouseInfoContext) => React.ReactNode; // eslint-disable-line no-unused-vars

const MouseInfo: React.FC<{
  children?: React.ReactNode | ChildFunction
}> = (props) => {
  const { children } = props;
  const mouseInfo = useMouseInfo();

  if (children) {
    if (typeof children === 'function') {
      return (
        <Fragment>
          {children(mouseInfo)}
        </Fragment>
      )
    }

    return (
      <Fragment>
        {children}
      </Fragment>
    )
  }
  return null;
};

export default MouseInfo;
