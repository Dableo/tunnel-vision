import React from 'react'
import reflection from 'features/render/reflection'
import Healthbar from 'features/health/Health'
import {ReactComponent as WarriorSvg} from './warrior.svg'
import {animated} from 'react-spring'
import useMovementSpring from 'features/hooks/useMovementSpring'
import Grave from 'features/render/Grave'

const GraveSprite = reflection(Grave)
const Sprite = reflection((props) => {
  return <WarriorSvg width="1" height="1" {...props}/>
})
const WarriorRender = ({id, x, health}) => {
  const [spring] = useMovementSpring(x)
  return (
    <animated.svg id={id} x={spring.x} width="1" height="1">
      {health > 0 ? (
        <>
          <Sprite/>
          <Healthbar x="0" y="-.15" height=".15" width="100%" health={health}/>
        </>
      ) : <GraveSprite/>}
    </animated.svg>
  )
}

export default WarriorRender