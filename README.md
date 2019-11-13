[![NPM](https://img.shields.io/npm/v/@trbl/react-mouse-position)](https://www.npmjs.com/@trbl/react-mouse-position)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@trbl/react-mouse-position?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# React Mouse Position

Here, mousey, mousey, mousey!

## Quick Start

### Installation

```bash
$ yarn add @trbl/react-mouse-position
```

### Compositon

```jsx
  import React from 'react';
  import { MousePositionProvider, withMousePosition } from '@trbl/react-mouse-position';

  const MyComponent = withMousePosition(() => return <div>My Component</div>);

  const App = () => {
    return (
      <MousePositionProvider>
        <MyComponent>
          ...
        </MyComponent>
      </MousePositionProvider>
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

  - [MousePositionProvider](/src/MousePositionProvider/README.md)
  - [withMousePosition](/src/withMousePosition/README.md)

## License

[MIT](https://github.com/trouble/react-mouse-position/blob/master/LICENSE) Copyright (c) TRBL, LLC
