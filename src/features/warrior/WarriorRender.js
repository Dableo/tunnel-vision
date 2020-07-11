import React from 'react'
import reflection from 'features/reflection/Reflection'
import Healthbar from 'features/health/Health'

const WarriorSprite = reflection(props => <rect width="1" height="1" fill="red" {...props}/>)
const WarriorRender = ({id, x, health}) => {
  return (
    <svg id={id} x={x} width="1" height="1">
      <WarriorSprite/>
      <Healthbar x="0" y="-.15" height=".15" width="100%" health={health}/>
    </svg>
  )
}

export default WarriorRender