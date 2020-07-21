import React from 'react'

import Flex from 'react-flex-it'
import 'react-flex-it/dist/index.css'
import styled from 'styled-components'

const CustomFlex = styled(Flex.aside)`
  background-color: red;
`

const Border = styled(CustomFlex)`
  border: 1px solid black;
`

const App = () =>
  <Border>
    <Flex.aside>1</Flex.aside>
    <Flex.main n={3} jc='center' column>
      <header>
        <h1>Title</h1>
      </header>
      <Flex.article>
        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
      </Flex.article>
    </Flex.main>
    <Flex.aside>3</Flex.aside>
  </Border>
export default App
