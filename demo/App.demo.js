import React from 'react';
import { MouseInfoProvider } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
// import WithMouseInfo from './WithMouseInfo.demo';
import UseMouseInfo from './UseMouseInfo.demo';

const AppDemo = () => (
  <MouseInfoProvider>
    {/* <WithMouseInfo /> */}
    <UseMouseInfo />
  </MouseInfoProvider>
);

export default AppDemo;
