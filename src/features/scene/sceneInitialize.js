// import {createSystem, removeComponent} from 'ecs'
import {active} from 'data'
import {enemyEntity} from 'features/enemy/enemyEntity'
import {warriorEntity} from '../warrior'
import { addComponent } from 'ecs'
import sceneEndEntity from './sceneEndEntity'
import {activeSpellEntity} from 'features/spells/spellEntity'

const getEnemies = (sceneId, sceneSize, density=5, offset=5) => {
  const enemyDistribution = [
    'skeleton',
    'skeleton',
    'skeleton',
    'skeleton',
    'wizard'
  ]
  const enemyMap = {
    'skeleton': (position) => enemyEntity('skeleton', position),
    'wizard': (position) => enemyEntity('wizard', position),
  }
  const enemies = []
  for (let index = 0; index < (sceneSize - offset) / density; index++) {
    const enemy = enemyDistribution[Math.floor(Math.random() * enemyDistribution.length)]
    enemies.push(enemyMap[enemy](Math.floor(Math.random() * density * index + offset)))
  }
  return enemies
}

const sceneInitialize = (dispatch, sceneId, size) => {
  const enemyActions = getEnemies(sceneId, size)
  dispatch(activeSpellEntity('ice', 0))
  dispatch(warriorEntity(1))
  enemyActions.forEach(e => {dispatch(e)})
  dispatch(addComponent(sceneId, active, {value: true}))
  dispatch(sceneEndEntity(size - 1))
}

export default sceneInitialize