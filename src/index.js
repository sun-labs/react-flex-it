import React from 'react'

import Flex from './components/Flex'
import domElements from './domElements'

const flex = ({ type, ...props }) => <Flex type={type} {...props} />
const constructFlex = (type) =>
  (props) => <Flex type={type} {...props} />

domElements.forEach((element) => {
  flex[element] = constructFlex(element)
})

export default flex
