[![NPM](https://img.shields.io/npm/v/@faceless-ui/mouse-info)](https://www.npmjs.com/@faceless-ui/mouse-info)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@faceless-ui/mouse-info?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# React Mouse Info

## Quick Start

### Installation

```bash
$ npm i @faceless-ui/mouse-info
$ # or
$ yarn add @faceless-ui/mouse-info
```

### Composition

```jsx
  import React from 'react';
  import { MouseInfoProvider, withMouseInfo, useMouseInfo } from '@faceless-ui/mouse-info';

  const WithMouseInfo = withMouseInfo(({ mouseInfo }) => <div>{mouseInfo}</div>);
  const UseMouseInfo = () => <div>{useMouseInfo()}</div>;

  const App = () => {
    return (
      <MouseInfoProvider>
        <WithMouseInfo />
        <UseMouseInfo />
      </MouseInfoProvider>
    )
  }

  export default App;
```

For working examples, see the [demo app](./demo/App.demo.js).

## Demo

```bash
$ git clone git@github.com:faceless-ui/mouse-info.git
$ yarn
$ yarn dev
$ open http://localhost:3000
```

## API

  - [MouseInfo](./src/MouseInfo/README.md)
  - [MouseInfoProvider](./src/MouseInfoProvider/README.md)
  - [useMouseInfo](./src/useMouseInfo/README.md)
  - [withMouseInfo](./src/withMouseInfo/README.md)

## Contribution

[Help us,](https://github.com/faceless-ui/.github/blob/master/CONTRIBUTING.md) or let us [help you help us](https://github.com/faceless-ui/.github/blob/master/SUPPORT.md).

## License

[MIT](https://github.com/faceless-ui/mouse-info/blob/master/LICENSE) Copyright (c) TRBL, LLC
