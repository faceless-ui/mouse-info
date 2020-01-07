import React from 'react';
import { mount } from 'enzyme';

import MouseInfoProvider from '.';

describe('MouseInfoProvider', () => {
  const wrapper = mount(
    <MouseInfoProvider />,
  );

  it('rendered with an initial state of correct shape and value', () => {
    const state = wrapper.state();

    expect(state).toMatchObject({
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
    });
  });

  it('responded to a mousemove event with an internal state update', () => {
    window.document.mouseTo(245, 400);
    window.document.mouseEnter(); // Browsers will fire mouseenter on alongside the initial mousemove

    const state = wrapper.state();

    expect(state).toMatchObject({
      x: 245,
      y: 400,
      xDifference: 245,
      yDifference: 400,
      xDirection: 'right',
      yDirection: 'down',
      xPercentage: 23.92578125,
      yPercentage: 52.083333333333336,
      totalPercentage: 38.00455729166667,
      isInViewport: true,
      eventsFired: 1,
    });
  });

  it('responded to a mouseleave event with an internal state update', () => {
    window.document.mouseLeave();

    const state = wrapper.state();

    expect(state).toMatchObject({
      isInViewport: false,
    });
  });

  it('responded to a mouseenter event with an internal state update', () => {
    window.document.mouseEnter();

    const state = wrapper.state();

    expect(state).toMatchObject({
      isInViewport: true,
    });
  });
});
