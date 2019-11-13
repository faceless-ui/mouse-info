import React from 'react';
import PropTypes from 'prop-types';
import { withMousePosition } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build

const MousePositionDemo = (props) => {
  const {
    mousePos: {
      x,
      y,
      isInViewport,
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
      </pre>
    </code>
  );
};

MousePositionDemo.defaultProps = {};

MousePositionDemo.propTypes = {
  mousePos: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    isInViewport: PropTypes.bool,
  }).isRequired,
};

export default withMousePosition(MousePositionDemo);
