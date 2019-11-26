import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MouseInfoContext from './context';

class MouseInfoProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animationScheduled: false,
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

  setViewportStatus = (status) => {
    this.setState({ isInViewport: status });
  }

  updateMouseInfo = (e) => {
    const {
      x: lastMouseX,
      y: lastMouseY,
    } = this.state;

    const currentMouseX = e.clientX;
    const currentMouseY = e.clientY;
    const xDifference = currentMouseX - lastMouseX;
    const yDifference = currentMouseY - lastMouseY;
    const xPercentage = Number((currentMouseX / window.innerWidth).toFixed(3));
    const yPercentage = Number((currentMouseY / window.innerHeight).toFixed(3));
    const totalPercentage = Number(((xPercentage + yPercentage) / 2).toFixed(3));

    this.setState({
      animationScheduled: false,
      x: currentMouseX,
      y: currentMouseY,
      xDifference,
      yDifference,
      xDirection: xDifference > 0 ? 'right' : 'left',
      yDirection: yDifference > 0 ? 'down' : 'up',
      xPercentage,
      yPercentage,
      totalPercentage,
    });
  };

  requestAnimation = (e) => {
    const { animationScheduled, eventsFired } = this.state;

    if (!animationScheduled) {
      requestAnimationFrame(() => this.updateMouseInfo(e));
      this.setState({ animationScheduled: true, eventsFired: eventsFired + 1 });
    }
  }

  render() {
    const { children } = this.props;
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
    } = this.state;

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
          eventsFired,
        },
      }}
      >
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
