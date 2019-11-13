import React from 'react';
import { MousePositionProvider } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import MousePositionDemo from './MousePosition.demo';

const AppDemo = () => {
  return (
    <MousePositionProvider>
      <MousePositionDemo />
    </MousePositionProvider>
  );
};

export default AppDemo;
