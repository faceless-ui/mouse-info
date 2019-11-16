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
        isInViewport: false,
      },
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
    const { mouseInfo } = this.state;

    this.setState({
      mouseInfo: {
        ...mouseInfo,
        isInViewport: status,
      },
    });
  }

  updateMouseInfo = (e) => {
    const { mouseInfo } = this.state;

    this.setState({
      animationScheduled: false,
      mouseInfo: {
        ...mouseInfo,
        x: e.clientX,
        y: e.clientY,
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
    const { mouseInfo, count } = this.state;

    return (
      <MouseInfoContext.Provider value={{
        mouseInfo: {
          ...mouseInfo,
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
