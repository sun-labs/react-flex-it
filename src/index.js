import React from 'react'

import FlexInlineStyle from './components/FlexInlineStyle'
import FlexStyledComponent from './components/FlexStyledComponent'

import domElements from './domElements'

const Flex = ({ type, ...props }) => <FlexStyledComponent type={type} {...props} />
const constructWithOpts = (type, Component) =>
  (props) => <Component type={type} {...props} />

Flex.InlineStyled = {}
domElements.forEach((element) => {
  Flex.InlineStyled[element] = constructWithOpts(element, FlexInlineStyle)
  Flex[element] = constructWithOpts(element, FlexStyledComponent)
})

export default Flex
