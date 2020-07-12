import React from 'react'
import styled from 'styled-components'

const StyledRect = styled.rect`
  fill: rgba(26,194,230, .6);
`

const Frozen = ({delay, ...props}) => {
  return <StyledRect {...props} />
}

export default Frozen