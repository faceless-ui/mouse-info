[![NPM](https://img.shields.io/npm/v/@trbl/react-mouse-info)](https://www.npmjs.com/@trbl/react-mouse-info)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@trbl/react-mouse-info?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# React Mouse Info

Grayish brown.

## Quick Start

### Installation

```bash
$ yarn add @trbl/react-mouse-info
```

### Composition

```jsx
  import React from 'react';
  import { MouseInfoProvider, withMouseInfo, useMouseInfo } from '@trbl/react-mouse-info';

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

## Demo

To demo locally, clone the repo and

```bash
$ yarn
$ yarn dev
$ open http://localhost:3000
```

## Documentation

All available props can be found via the references below:

  - [MouseInfoProvider](./src/MouseInfoProvider/README.md)
  - [useMouseInfo](./src/useMouseInfo/README.md)
  - [withMouseInfo](./src/withMouseInfo/README.md)

## Contribution

[Help us,](https://github.com/trouble/.github/blob/master/CONTRIBUTING.md) or let us [help you help us](https://github.com/trouble/.github/blob/master/SUPPORT.md).

## License

[MIT](https://github.com/trouble/react-mouse-info/blob/master/LICENSE) Copyright (c) TRBL, LLC
