import React from 'react'
import Healthbar from 'features/health/Health'
import reflection from 'features/render/reflection'
import Grave from 'features/render/Grave'
import {ReactComponent as WizardSvg} from './wizard.svg'
import useMovementSpring from 'features/hooks/useMovementSpring'
import { animated } from 'react-spring'
import Frozen from 'features/spells/Frozen'

const EnemySprite = reflection((props) => {
  return <WizardSvg width="1" height="1" {...props}/>
})
const GraveSprite = reflection(Grave)
const EnemyRender = ({id, x, health, frozen}) => {
  const [spring] = useMovementSpring(x)
  return (
    <animated.svg id={id} x={spring.x} width="1" height="1">
      {health > 0 ? (
        <>
          <EnemySprite/>
          {frozen && <Frozen width="1" height="1" />}
          {health > 0 && <Healthbar x="0" y="-.15" height=".15" width="100%" health={health}/>}
        </>
      ) : <GraveSprite/>}
    </animated.svg>
  )
}

export default EnemyRender
