import React from 'react'
import { parseProps } from '../componentUtils'

const Flex = (_props) => {
  const props = parseProps(_props)
  const { elemProps, type, children } = props
  return React.createElement(type, elemProps, children)
}

export default Flex
