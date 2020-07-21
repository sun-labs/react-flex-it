import React from 'react'
import styled from 'styled-components'
import { parseProps } from '../componentUtils'

const FlexStyledComponent = (_props) => {
  const { type, props, children } = parseProps(_props)
  const StyledComponent = styled[type](props => props.css)
  const { style, ...rest } = props
  return <StyledComponent css={style} {...rest}>{children}</StyledComponent>
}

export default FlexStyledComponent
