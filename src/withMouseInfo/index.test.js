import React from 'react';
import { shallow } from 'enzyme';

import MouseInfoProvider from '../MouseInfoProvider';
import withMouseInfo from '.';

describe('withMouseInfo', () => {
  const WithMouseInfo = withMouseInfo(() => (
    <code>
      Hello, world!
    </code>
  ));

  // Note: when .props() is called on a shallow wrapper, the returned values will be
  // of the root node that the wrapper component renders — not the component itself.
  // See https://airbnb.io/enzyme/docs/api/ShallowWrapper/props.html
  const wrapper = shallow(
    <MouseInfoProvider>
      <WithMouseInfo />
    </MouseInfoProvider>,
  );

  it('rendered with an initial mouseInfo prop of correct shape and value', () => {
    const { value: { mouseInfo } } = wrapper.props();

    expect(mouseInfo).toMatchObject({
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

  it('received an updated mouseInfo prop after a mousemouse event', () => {
    window.document.mouseTo(982, 491);
    window.document.mouseEnter(); // Browsers will fire mouseenter on alongside initial mousemove

    const { value: { mouseInfo } } = wrapper.props();

    expect(mouseInfo).toMatchObject({
      x: 982,
      y: 491,
      xDifference: 982,
      yDifference: 491,
      xDirection: 'right',
      yDirection: 'down',
      xPercentage: 95.8984375,
      yPercentage: 63.932291666666664,
      totalPercentage: 79.91536458333333,
      isInViewport: true,
      eventsFired: 1,
    });
  });

  it('received an updated mouseInfo prop after a mouseleave event', () => {
    window.document.mouseLeave();
    const { value: { mouseInfo } } = wrapper.props();
    expect(mouseInfo).toHaveProperty('isInViewport', false);
  });

  it('received an updated mouseInfo prop after a mouse event', () => {
    window.document.mouseEnter();
    const { value: { mouseInfo } } = wrapper.props();
    expect(mouseInfo).toHaveProperty('isInViewport', true);
  });
});
