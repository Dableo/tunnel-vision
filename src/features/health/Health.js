import React from 'react'
import styled from 'styled-components'

const StyledHeart = styled.circle`
  fill: ${props => props.theme.palette.health}
`

const Heart = (props) => {
  return (
    <StyledHeart r=".5" {...props}/>
  )
}
const Healthbar = ({health=1, ...props}) => {
  const hearts = []
  for (let index = 0; index < health; index++) {
    hearts.push(<Heart key={index} cx={(.5) + (index * 1.5)}/>)
  }
  return (
    <svg viewBox={`0 0 ${health + ((health - 1) / 2)} 1`} {...props}>
      {hearts}
    </svg>
  )
}

export default Healthbar