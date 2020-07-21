export const parseProps = (props) => {
  const {
    c, column: c2, col: c3,
    r, row: r2,
    n, flex: n2,
    h, height: h2,
    w, width: w2,
    display = 'flex',
    ai, alignItems: ai2,
    jc, justifyContent: jc2,
    type = 'div',
    auto,
    children,
    className,
    style: userStyle = {},
    ...rest
  } = props

  const alignItems = ai || ai2
  const justifyContent = jc || jc2
  const flex = n || n2 || (auto ? 'unset' : 1)
  const width = w || w2 || (auto ? 'unset' : '100%')
  const height = h || h2 || (auto ? 'unset' : '100%')
  const row = r || r2
  const column = c || c2 || c3

  const style = {
    width,
    height,
    display,
    flex,
    flexDirection: (column && !row)
      ? 'column'
      : 'row',
    alignItems,
    justifyContent,
    ...userStyle
  }

  return {
    type,
    children,
    props: {
      className,
      style,
      ...rest
    }
  }
}
