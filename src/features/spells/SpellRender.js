import React from 'react'
import styled from 'styled-components'

const SpellRect = (props) => <rect x=".1" rx=".04" height=".2" {...props}/>
const SpellIndicator = styled(SpellRect)`
  fill: ${props => props.theme.palette.spellIndicator};
`

const SpellRender = ({id, x, size, delay, ...props}) => {
  const indicators = []
  for (let index = 0; index < delay; index++) {
    indicators.push(<SpellIndicator key={index} width={size - .2} y={.1 + (index * .25)} />)
  }
  return (
    <svg id={id} x={x} y="1" width={size}>
      {indicators}
    </svg>
  )
}
export default SpellRender