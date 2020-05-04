import React from 'react';
import {
  MouseInfoProvider,
  // MouseInfo,
} from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
// import WithMouseInfo from './WithMouseInfo.demo';
import UseMouseInfo from './UseMouseInfo.demo';
// import LogProps from './LogProps';

const AppDemo = () => (
  <MouseInfoProvider>
    {/* <WithMouseInfo /> */}
    <UseMouseInfo />
    {/* <MouseInfo>
      {(mouseInfo) => LogProps(mouseInfo)}
    </MouseInfo> */}
  </MouseInfoProvider>
);

export default AppDemo;
