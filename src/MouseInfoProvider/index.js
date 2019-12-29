import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MouseInfoContext from './context';

class MouseInfoProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
      xDifference: 0,
      yDifference: 0,
      xDirection: '',
      yDirection: '',
      xPercentage: 0,
      yPercentage: 0,
      totalPercentage: 0,
      isInViewport: false,
      eventsFired: 0,
      animationScheduled: false,
    };
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.requestAnimation);
    document.addEventListener('mouseenter', () => this.setViewportStatus(true));
    document.addEventListener('mouseleave', () => this.setViewportStatus(false));
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.requestAnimation);
    document.removeEventListener('mouseenter', this.setViewportStatus);
    document.removeEventListener('mouseleave', this.setViewportStatus);
  }

  requestAnimation = (e) => {
    const { animationScheduled } = this.state;

    if (!animationScheduled) {
      this.setState({
        animationScheduled: true,
      }, () => requestAnimationFrame((timestamp) => this.updateMouseInfo(e, timestamp)));
    }
  }

  setViewportStatus = (status) => {
    this.setState({ isInViewport: status });
  }

  updateMouseInfo = (e, timestamp) => {
    const {
      x: prevMouseX,
      y: prevMouseY,
      xDirection: prevXDirection,
      yDirection: prevYDirection,
      eventsFired,
    } = this.state;

    const currentMouseX = e.clientX;
    const currentMouseY = e.clientY;

    const xDifference = currentMouseX - prevMouseX;
    const yDifference = currentMouseY - prevMouseY;

    const xPercentage = (currentMouseX / window.innerWidth) * 100;
    const yPercentage = (currentMouseY / window.innerHeight) * 100;
    const totalPercentage = (xPercentage + yPercentage) / 2;

    /* eslint-disable no-nested-ternary */
    const xDirection = xDifference > 0 ? 'right' : xDifference < 0 ? 'left' : prevXDirection;
    const yDirection = yDifference > 0 ? 'down' : yDifference < 0 ? 'up' : prevYDirection;

    this.setState({
      x: currentMouseX,
      y: currentMouseY,
      xDifference,
      yDifference,
      xDirection,
      yDirection,
      xPercentage,
      yPercentage,
      totalPercentage,
      eventsFired: timestamp ? eventsFired + 1 : eventsFired,
      animationScheduled: false,
    });
  };

  render() {
    const { children } = this.props;
    const mouseInfo = { ...this.state };
    delete mouseInfo.animationScheduled;

    return (
      <MouseInfoContext.Provider value={{ mouseInfo }}>
        {children}
      </MouseInfoContext.Provider>
    );
  }
}

MouseInfoProvider.defaultProps = {};

MouseInfoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MouseInfoProvider;
