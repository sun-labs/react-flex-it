import React from 'react'

const Flex = (props) => {
  const {
    c, column: c2,
    r, row: r2,
    n, flex: n2,
    h, height: h2,
    w, width: w2,
    display = 'flex',
    ai, alignItems: ai2,
    jc, justifyContent: jc2,
    element = 'div',
    children,
    className,
    style = {},
    ...rest
  } = props

  const alignItems = ai || ai2
  const justifyContent = jc || jc2
  const flex = n || n2 || 1
  const width = w || w2 || '100%'
  const height = h || h2 || '100%'
  const row = r || r2
  const column = c || c2

  return React.createElement(
    element,
    {
      className,
      style: {
        width,
        height,
        display,
        flex,
        flexDirection: (column && !row)
          ? 'column'
          : 'row',
        alignItems,
        justifyContent,
        ...style
      },
      ...rest
    },
    children)
}

export default Flex
