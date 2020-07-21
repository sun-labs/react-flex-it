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

const _Block = (props) => <Flex.figure ai='center' jc='center' {...props} />
const Block = styled(Flex.figure)`
  align-items: center;
  justify-content: center;
`

const App = () =>
  <Flex.main column>
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
    <Flex column>
      <Flex jc='center'>
        <Block>1.1</Block>
        <Block>1.2</Block>
        <Block>1.3</Block>
      </Flex>
      <Flex>
        <Block>2.1</Block>
        <Block>2.2</Block>
        <Block>2.3</Block>
      </Flex>
      <Flex>
        <Block>3.1</Block>
        <Block>3.2</Block>
        <Block>3.3</Block>
      </Flex>
    </Flex>
  </Flex.main>
export default App
