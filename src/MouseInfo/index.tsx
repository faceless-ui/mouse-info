import React, { Fragment } from 'react';
import { IMouseInfoContext } from '../MouseInfoProvider/context.js';
import { useMouseInfo } from '../useMouseInfo/index.js';

export type ChildFunction = (context: IMouseInfoContext) => React.ReactNode; // eslint-disable-line no-unused-vars

export type MouseInfoProps = {
  children?: React.ReactNode | ChildFunction
}

export const MouseInfo: React.FC<MouseInfoProps> = (props) => {
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
