import React from 'react'

import Flex from 'react-flex-it'
import 'react-flex-it/dist/index.css'

const Border = ({ style, children, ...props }) =>
  <Flex {...props} style={{ border: '1px solid black', ...style }}>{children}</Flex>

const App = () =>
  <Border>
    <Border>1</Border>
    <Border n={3} jc='center'>2</Border>
    <Border>3</Border>
  </Border>
export default App
