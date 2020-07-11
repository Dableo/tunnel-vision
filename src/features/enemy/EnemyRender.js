import React from 'react'
import Healthbar from 'features/health/Health'
import reflection from 'features/reflection/Reflection'

const EnemySprite = reflection((props) => <rect width="1" height="1" fill="blue" {...props}/>)
const EnemyRender = ({id, x, health}) => {
  return (
    <svg id={id} x={x} width="1" height="1">
      <EnemySprite/>
      {health > 0 && <Healthbar x="0" y="-.15" height=".15" width="100%" health={health}/>}
    </svg>
  )
}

export default EnemyRender
