import React from 'react';
import { useMouseInfo } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build

const UseMouseInfo = () => {
  const {
    x,
    y,
    xDifference,
    yDifference,
    xDirection,
    yDirection,
    xPercentage,
    yPercentage,
    totalPercentage,
    isInViewport,
    eventsFired,
  } = useMouseInfo();

  return (
    <code>
      <pre>
        {'mouseInfo: {'}
        <br />
        &emsp;
        {`x: ${x},`}
        <br />
        &emsp;
        {`y: ${y},`}
        <br />
        &emsp;
        {`xDifference: ${xDifference},`}
        <br />
        &emsp;
        {`yDifference: ${yDifference},`}
        <br />
        &emsp;
        {`xDirection: ${xDirection},`}
        <br />
        &emsp;
        {`yDirection: ${yDirection},`}
        <br />
        &emsp;
        {`xPercentage: ${xPercentage},`}
        <br />
        &emsp;
        {`yPercentage: ${yPercentage},`}
        <br />
        &emsp;
        {`totalPercentage: ${totalPercentage},`}
        <br />
        &emsp;
        {`isInViewport: ${isInViewport},`}
        <br />
        &emsp;
        {`eventsFired: ${eventsFired},`}
        <br />
        {'}'}
      </pre>
    </code>
  );
};

export default UseMouseInfo;
