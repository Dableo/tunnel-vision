import React from 'react'
import { useSelector } from 'react-redux'
import {enemyEntitySelector} from './enemyEntity'
import EnemyRender from './EnemyRender'

const Enemy = (props) => {
  // const dispatch = useDispatch()
  const entities = useSelector(enemyEntitySelector)
  return entities.map(enemy => <EnemyRender key={enemy.id} id={enemy.id} x={enemy.position.value} health={enemy.health.value}/>)
}

export default Enemy
