import React from 'react';
import { MouseInfoProvider } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import MouseInfoDemo from './MouseInfo.demo';

const AppDemo = () => (
  <MouseInfoProvider>
    <MouseInfoDemo />
  </MouseInfoProvider>
);

export default AppDemo;
