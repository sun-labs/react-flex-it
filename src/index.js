import React from 'react'

import FlexInlineStyle from './components/FlexInlineStyle'
import FlexStyledComponent from './components/FlexStyledComponent'

import domElements from './domElements'

const flex = ({ type, ...props }) => <FlexStyledComponent type={type} {...props} />
const constructWithOpts = (type, Component) =>
  (props) => <Component type={type} {...props} />

flex.InlineStyled = {}
domElements.forEach((element) => {
  flex.InlineStyled[element] = constructWithOpts(element, FlexInlineStyle)
  flex[element] = constructWithOpts(element, FlexStyledComponent)
})

export default flex
