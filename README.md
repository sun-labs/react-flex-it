# react-flex-it

> Simplify your layout workflow

[![NPM](https://img.shields.io/npm/v/react-flex-it.svg)](https://www.npmjs.com/package/react-flex-it) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-flex-it
```

## Usage

```jsx
import Flex from 'react-flex-it'

const MainLayout = () =>
  <Flex>
    <Flex column></Flex>
    <Flex n='3' column>
      <Flex.header>
        <h1>Title</h1>
      <Flex.header>
    </Flex>
    <Flex column></Flex>
  </Flex>
```

### With styled-components

```jsx
import Flex from 'react-flex-it'
import styled from 'styled-components'

const BorderFlex = styled(Flex)`
  border: 1px solid gray;
`

const MainLayout = () =>
  <BorderFlex>
    <Flex column></Flex>
    <Flex n='3' column alignItems='center'>
      <Flex.header>
        <h1>Welcome, User</h1>
      <Flex.header>
      <Flex.main>

      <Flex.main>
    </Flex>
    <Flex column></Flex>
  </BorderFlex>
```

## License

MIT © [sun-labs](https://github.com/sun-labs)
