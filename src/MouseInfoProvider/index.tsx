import React, { Component } from 'react';
import MouseInfoContext from '../MouseInfoContext';
import { IMouseInfoContext } from '../MouseInfoContext/types';
import { Props } from './types';

class MouseInfoProvider extends Component<Props, IMouseInfoContext> {
  constructor(props: Props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
      xDifference: 0,
      yDifference: 0,
      xDirection: undefined,
      yDirection: undefined,
      xPercentage: 0,
      yPercentage: 0,
      totalPercentage: 0,
      isInViewport: false,
      eventsFired: 0,
      animationScheduled: false,
    };
  }

  componentDidMount(): void {
    document.addEventListener('mousemove', this.requestAnimation);
    document.addEventListener('mouseenter', () => this.setViewportStatus(true));
    document.addEventListener('mouseleave', () => this.setViewportStatus(false));
  }

  componentWillUnmount(): void {
    document.removeEventListener('mousemove', this.requestAnimation);
    document.removeEventListener('mouseenter', () => this.setViewportStatus);
    document.removeEventListener('mouseleave', () => this.setViewportStatus);
  }

  requestAnimation = (e: MouseEvent): void => {
    const { animationScheduled } = this.state;

    if (!animationScheduled) {
      this.setState({
        animationScheduled: true,
      }, () => requestAnimationFrame((timestamp) => this.updateMouseInfo(e, timestamp)));
    }
  }

  setViewportStatus = (status: MouseEvent | boolean): void => {
    this.setState({ isInViewport: Boolean(status) });
  }

  updateMouseInfo = (e: MouseEvent, timestamp?: number): void => {
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

    const xDirection = xDifference > 0 ? 'right' : xDifference < 0 ? 'left' : prevXDirection; // eslint-disable-line no-nested-ternary
    const yDirection = yDifference > 0 ? 'down' : yDifference < 0 ? 'up' : prevYDirection; // eslint-disable-line no-nested-ternary

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

  render(): JSX.Element {
    const { children } = this.props;
    const mouseInfo = { ...this.state };
    delete mouseInfo.animationScheduled;

    return (
      <MouseInfoContext.Provider value={{ ...mouseInfo }}>
        {children && children}
      </MouseInfoContext.Provider>
    );
  }
}

export default MouseInfoProvider;
