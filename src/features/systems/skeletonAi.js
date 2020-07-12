import {createSystem} from 'ecs'
import {skeleton, movement, warrior, position, delay} from 'data'
import attackEntity from 'features/attack/attackEntity'
import { inRange } from 'utility'

const skeletonActions = (enemy, warrior, queue) => {
  const actions = (inRange(warrior.position.value, enemy.position.value, enemy.position.value - 1)) ? [
    'attack',
    'moveRight',
  ] : [
    'wait',
    'wait',
    'moveLeft',
    'moveRight',
  ]
  const actionMap = {
    wait: () => ({...enemy}),
    moveLeft: () => ({...enemy, movement: {value: -1}}),
    moveRight: () => ({...enemy, movement: {value: 1}}),
    attack: () => {
      queue(attackEntity(enemy.id, enemy.position.value - 1))
      return {...enemy, delay: {value: 2}}
    }
  }
  const action = actions[Math.floor(Math.random() * actions.length)]
  return actionMap[action]()
}

const skeletonAi = createSystem(
  [[skeleton, movement, position, delay], [warrior, movement, position]],
  ([skeletons, warriors], args, queue) => {
    const warrior = warriors[0]
    return skeletons.map(skeleton => {
      if (skeleton.delay.value <= 0) {
        return skeletonActions(skeleton, warrior, queue)
      }
      return {...skeleton}
    })
  }
)

export default skeletonAi