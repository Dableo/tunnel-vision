import React from 'react'
import Healthbar from 'features/health/Health'
import reflection from 'features/render/reflection'
import Grave from 'features/render/Grave'
import {ReactComponent as SkeletonSvg} from './skeleton.svg'
import {animated} from 'react-spring'
import useMovementSpring from 'features/hooks/useMovementSpring'

const EnemySprite = reflection((props) => {
  return <SkeletonSvg width="1" height="1" {...props}/>
})
const GraveSprite = reflection(Grave)

const EnemyRender = ({id, x, health}) => {
  const [movement] = useMovementSpring(x)
  return (
    <animated.svg id={id} x={movement.x} width="1" height="1">
      {health > 0 ? (
        <>
          <EnemySprite/>
          {health > 0 && <Healthbar x="0" y="-.15" height=".15" width="100%" health={health}/>}
        </>
      ) : <GraveSprite/>}
    </animated.svg>
  )
}

export default EnemyRender
