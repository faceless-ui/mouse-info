import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MouseInfoContext from './context';

const MouseInfoProvider = (props) => {
  const { children } = props;

  const [isAnimationScheduled, setIsAnimationScheduled] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [xDifference, setXDifference] = useState(0);
  const [yDifference, setYDifference] = useState(0);
  const [xDirection, setXDirection] = useState('');
  const [yDirection, setYDirection] = useState('');
  const [xPercentage, setXPercentage] = useState(false);
  const [yPercentage, setYPercentage] = useState(0);
  const [totalPercentage, setTotalPercentage] = useState(0);
  const [isInViewport, setIsInViewport] = useState(false);
  const [numEventsFired, setNumEventsFired] = useState(0);

  useEffect(() => {
    function updateMouseInfo(e) {
      setIsAnimationScheduled(false);

      setX(e.clientX);
      setY(e.clientY);
      setXDifference(e.clientX - x);
      setYDifference(e.clientY - y);
      setXPercentage(Number((x / window.innerWidth).toFixed(3)));
      setYPercentage(Number((y / window.innerHeight).toFixed(3)));
      setTotalPercentage(Number(((xPercentage + yPercentage) / 2).toFixed(3)));
      setXDirection(xDifference > 0 ? 'right' : xDifference < 0 ? 'left' : xDirection);
      setYDirection(yDifference > 0 ? 'down' : yDifference < 0 ? 'up' : yDirection);
    }

    function requestAnimation(e) {
      if (!isAnimationScheduled) {
        requestAnimationFrame(() => updateMouseInfo(e));
        setIsAnimationScheduled(true);
        setNumEventsFired(numEventsFired + 1);
      }
    }

    function setViewportStatus(status) {
      setIsInViewport(status);
    }

    document.addEventListener('mousemove', requestAnimation);
    document.addEventListener('mouseenter', () => setViewportStatus(true));
    document.addEventListener('mouseleave', () => setViewportStatus(false));

    return function cleanup() {
      document.removeEventListener('mousemove', requestAnimation);
      document.removeEventListener('mouseenter', setViewportStatus);
      document.removeEventListener('mouseleave', setViewportStatus);
    };
  }, [isAnimationScheduled, numEventsFired, x, xDifference, xDirection, xPercentage, y, yDifference, yDirection, yPercentage]);

  return (
    <MouseInfoContext.Provider value={{
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
        eventsFired: numEventsFired,
      },
    }}
    >
      {children}
    </MouseInfoContext.Provider>
  );
};

MouseInfoProvider.defaultProps = {};

MouseInfoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MouseInfoProvider;
