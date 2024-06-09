import React from 'react';
import { MouseInfoProvider } from '@faceless-ui/mouse-info';
// import WithMouseInfo from './WithMouseInfo.demo.js';
import UseMouseInfo from './UseMouseInfo.demo.js';
// import LogProps from './LogProps.js';

const AppDemo: React.FC = () => (
  <MouseInfoProvider>
    {/* <WithMouseInfo /> */}
    <UseMouseInfo />
    {/* <MouseInfo>
      {(mouseInfo) => LogProps(mouseInfo)}
    </MouseInfo> */}
  </MouseInfoProvider>
);

export default AppDemo;
