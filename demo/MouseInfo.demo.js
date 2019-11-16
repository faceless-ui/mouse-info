import React from 'react';
import PropTypes from 'prop-types';
import { withMouseInfo } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build

const MouseInfoDemo = (props) => {
  const {
    mouseInfo: {
      x,
      y,
      isInViewport,
      count,
    },
  } = props;

  return (
    <code>
      <pre>
        {`mouse x position: ${x}`}
        <br />
        {`mouse y position: ${y}`}
        <br />
        {`mouse is in viewport: ${isInViewport}`}
        <br />
        {`count: ${count}`}
      </pre>
    </code>
  );
};

MouseInfoDemo.defaultProps = {};

MouseInfoDemo.propTypes = {
  mouseInfo: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    isInViewport: PropTypes.bool,
    count: PropTypes.number,
  }).isRequired,
};

export default withMouseInfo(MouseInfoDemo);
