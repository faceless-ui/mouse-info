import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MouseInfoContext from './context';

const MouseInfoProvider = (props) => {
  const { children } = props;

  const [isTrackingDisabled, setDisabledTracking] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const [numEventsFired, setNumEventsFired] = useState(0);
  const [isAnimationScheduled, setIsAnimationScheduled] = useState(false);
  const [mouseInformation, setMouseInformation] = useState({
    x: 0,
    y: 0,
    xDifference: 0,
    yDifference: 0,
    xDirection: '',
    yDirection: '',
    xPercentage: 0,
    yPercentage: 0,
    totalPercentage: 0,
  });

  function disableTracking(trackingStatus) {
    setDisabledTracking(trackingStatus);
  }


  useEffect(() => {
    function updateMouseInfo(e, timestamp) {
      setIsAnimationScheduled(false);
      setNumEventsFired(prevEventsFired => (timestamp ? prevEventsFired + 1 : prevEventsFired));
      setMouseInformation(prev => ({
        x: e.clientX,
        y: e.clientY,
        xDifference: e.clientX - prev.x,
        yDifference: e.clientY - prev.y,
        xPercentage: Number((prev.x / window.innerWidth).toFixed(3)),
        yPercentage: Number((prev.y / window.innerHeight).toFixed(3)),
        totalPercentage: Number(((prev.xPercentage + prev.yPercentage) / 2).toFixed(3)),
        xDirection: prev.xDifference > 0 ? 'right' : prev.xDifference < 0 ? 'left' : prev.xDirection,
        yDirection: prev.yDifference > 0 ? 'down' : prev.yDifference < 0 ? 'up' : prev.yDirection,
      }));
    }

    function requestAnimation(e) {
      if (!isAnimationScheduled && !isTrackingDisabled) {
        requestAnimationFrame(timestamp => updateMouseInfo(e, timestamp));
        setIsAnimationScheduled(true);
      }
    }

    function setOutsideViewport() {
      setIsInViewport(false);
    }

    function setInsideViewport() {
      setIsInViewport(true);
    }

    function addListeners() {
      document.addEventListener('mousemove', requestAnimation);
      document.addEventListener('mouseenter', setInsideViewport);
      document.addEventListener('mouseleave', setOutsideViewport);
    }

    function removeListeners() {
      document.removeEventListener('mousemove', requestAnimation);
      document.removeEventListener('mouseenter', setInsideViewport);
      document.removeEventListener('mouseleave', setOutsideViewport);
    }

    if (!isTrackingDisabled) addListeners();
    else removeListeners();

    return () => removeListeners();
  }, [isAnimationScheduled, isTrackingDisabled]);

  return (
    <MouseInfoContext.Provider value={{
      mouseInfo: {
        ...mouseInformation,
        isInViewport,
        eventsFired: numEventsFired,
      },
      disableTracking,
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
