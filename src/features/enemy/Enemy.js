import React from 'react'
import { useSelector } from 'react-redux'
import {enemyEntitySelector} from './enemyEntity'
import SkeletonRender from './SkeletonRender'
import WizardRender from './WizardRender'

const EnemyRender = ({render, ...props}) => {
  if (render === 'wizard') {
    return <WizardRender {...props}/>
  } else {
    return <SkeletonRender {...props}/>
  }
}

const Enemy = (props) => {
  // const dispatch = useDispatch()
  const entities = useSelector(enemyEntitySelector)
  return entities.map(enemy => <EnemyRender
    key={enemy.id}
    render={enemy.enemy.type}
    id={enemy.id}
    x={enemy.position.value}
    health={enemy.health.value}
    frozen={enemy.frozen.value}
  />)
}

export default Enemy
