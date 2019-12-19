import React from 'react';
import PropTypes from 'prop-types';
import { withMouseInfo } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build

const MouseInfoDemo = (props) => {
  const {
    mouseInfo: {
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
    },
    disableTracking,
  } = props;

  return (
    <>
      <code>
        <pre>
          {'scrollPos:{'}
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
          {`eventsFired: ${eventsFired}`}
          <br />
          {'}'}
        </pre>
        <br />
        <button
          onClick={() => disableTracking(true)}
          type="button"
        >
        stop
        </button>
        <button
          onClick={() => disableTracking(false)}
          type="button"
        >
        start
        </button>
      </code>
      <div
        onMouseEnter={() => disableTracking(false)}
        onBlur={() => disableTracking(true)}
        onMouseOut={() => disableTracking(true)}
        style={{
          background: 'grey',
          height: '100px',
          width: '100px',
        }}
      />
    </>
  );
};

MouseInfoDemo.defaultProps = {};

MouseInfoDemo.propTypes = {
  mouseInfo: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    xDifference: PropTypes.number,
    yDifference: PropTypes.number,
    xDirection: PropTypes.oneOf([
      '',
      'left',
      'right',
    ]),
    yDirection: PropTypes.oneOf([
      '',
      'up',
      'down',
    ]),
    xPercentage: PropTypes.number,
    yPercentage: PropTypes.number,
    totalPercentage: PropTypes.number,
    isInViewport: PropTypes.bool,
    eventsFired: PropTypes.number,
  }).isRequired,
  disableTracking: PropTypes.func.isRequired,
};

export default withMouseInfo(MouseInfoDemo);
