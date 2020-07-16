import React from 'react'

import Flex from 'react-flex-it'
import 'react-flex-it/dist/index.css'

const Border = ({ style, children, ...props }) =>
  <Flex {...props} style={{ border: '1px solid black', ...style }}>{children}</Flex>

const App = () =>
  <Border>
    <Flex.aside>1</Flex.aside>
    <Flex.main n={3} jc='center' column>
      <Flex.header auto>
        <h1>Title</h1>
      </Flex.header>
      <Flex.article>
        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
      </Flex.article>
    </Flex.main>
    <Flex.aside>3</Flex.aside>
  </Border>
export default App
