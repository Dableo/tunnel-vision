import React from 'react'
import reflection from 'features/render/reflection'
import Healthbar from 'features/health/Health'
import {ReactComponent as WarriorSvg} from './warrior.svg'
import {animated} from 'react-spring'
import useMovementSpring from 'features/hooks/useMovementSpring'
import Grave from 'features/render/Grave'
import Frozen from 'features/spells/Frozen'

const GraveSprite = reflection(Grave)
const Sprite = reflection((props) => {
  return <WarriorSvg width="1" height="1" {...props}/>
})
const WarriorRender = ({id, x, health, frozen}) => {
  const [spring] = useMovementSpring(x)
  return (
    <animated.svg id={id} x={spring.x} width="1" height="1">
      {health > 0 ? (
        <>
          <Sprite/>
          {frozen && <Frozen width="1" height="1" />}
          <Healthbar x="0" y="-.15" height=".15" width="100%" health={health}/>
        </>
      ) : <GraveSprite/>}
    </animated.svg>
  )
}

export default WarriorRender