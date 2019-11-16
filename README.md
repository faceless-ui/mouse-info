[![NPM](https://img.shields.io/npm/v/@trbl/react-mouse-info)](https://www.npmjs.com/@trbl/react-mouse-info)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@trbl/react-mouse-info?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# React Mouse Info

Here, mousey, mousey, mousey!

## Quick Start

### Installation

```bash
$ yarn add @trbl/react-mouse-info
```

### Compositon

```jsx
  import React from 'react';
  import { MouseInfoProvider, withMouseInfo } from '@trbl/react-mouse-info';

  const MyComponent = withMouseInfo(() => return <div>My Component</div>);

  const App = () => {
    return (
      <MouseInfoProvider>
        <MyComponent>
          ...
        </MyComponent>
      </MouseInfoProvider>
    )
  }

  export default App;
```

## Demo

To demo locally, clone the repo and

```bash
$ yarn install
$ npm run dev
$ open http://localhost:3000
```

## Documentation

All available props can be found via the references below:

  - [MouseInfoProvider](/src/MouseInfoProvider/README.md)
  - [withMouseInfo](/src/withMouseInfo/README.md)

## License

[MIT](https://github.com/trouble/react-mouse-info/blob/master/LICENSE) Copyright (c) TRBL, LLC
