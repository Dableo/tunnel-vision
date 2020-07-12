import React from 'react'
import styled from 'styled-components'

const AttackRect = (props) => <rect x=".1" rx=".04" height=".2" {...props}/>
const AttackIndicator = styled(AttackRect)`
  fill: ${props => props.theme.palette.attackIndicator};
`

const AttackRender = ({id, x, size, delay, ...props}) => {
  const indicators = []
  for (let index = 0; index < delay; index++) {
    indicators.push(<AttackIndicator key={index} width={size - .2} y={.1 + (index * .25)} />)
  }
  return (
    <svg id={id} x={x} y="1" width={size}>
      {indicators}
    </svg>
  )
}
export default AttackRender