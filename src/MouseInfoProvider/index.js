import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MouseInfoContext from './context';

class MouseInfoProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animationScheduled: false,
      mouseInfo: {
        x: 0,
        y: 0,
        xDifference: 0,
        yDifference: 0,
        xDirection: '',
        yDirection: '',
        xPercentage: 0,
        yPercentage: 0,
      },
      isInViewport: false,
      count: 0,
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
      mouseInfo: {
        x: lastMouseX,
        y: lastMouseY,
      },
    } = this.state;

    const currentMouseX = e.clientX;
    const currentMouseY = e.clientY;

    const xDifference = currentMouseX - lastMouseX;
    const yDifference = currentMouseY - lastMouseY;

    this.setState({
      animationScheduled: false,
      mouseInfo: {
        x: currentMouseX,
        y: currentMouseY,
        xDifference,
        yDifference,
        xDirection: xDifference > 0 ? 'right' : 'left',
        yDirection: yDifference > 0 ? 'down' : 'up',
        xPercentage: Number(((currentMouseX / window.innerWidth) * 100).toFixed(3)),
        yPercentage: Number(((currentMouseY / window.innerHeight) * 100).toFixed(3)),
      },
    });
  };

  requestAnimation = (e) => {
    const { animationScheduled, count } = this.state;

    if (!animationScheduled) {
      requestAnimationFrame(() => this.updateMouseInfo(e));
      this.setState({ animationScheduled: true, count: count + 1 });
    }
  }

  render() {
    const { children } = this.props;
    const { mouseInfo, count, isInViewport } = this.state;

    return (
      <MouseInfoContext.Provider value={{
        mouseInfo: {
          ...mouseInfo,
          isInViewport,
          count,
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
