import React from 'react';
import { MouseInfoProvider } from '@faceless-ui/mouse-info';
// import WithMouseInfo from './WithMouseInfo.demo';
import UseMouseInfo from './UseMouseInfo.demo';
// import LogProps from './LogProps';

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
