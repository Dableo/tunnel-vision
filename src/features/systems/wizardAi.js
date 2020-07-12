import {createSystem} from 'ecs'
import {wizard, movement, warrior, position, delay} from 'data'
import attackEntity from 'features/attack/attackEntity'
import { inRange } from 'utility'

const wizardActions = (enemy, warrior, queue) => {
  const warriorPos = warrior.position.value
  const enemyPos = enemy.position.value
  let actions = ['wait']
  if (inRange(warriorPos, enemyPos, enemyPos - 5)) {
    actions = [
      'attack'
    ]
  }
  if (inRange(warriorPos, enemyPos, enemyPos - 1)) {
    actions = [
      'moveRight',
      'attack'
    ]
  }
  const actionMap = {
    wait: () => ({...enemy}),
    moveLeft: () => ({...enemy, movement: {value: -1}}),
    moveRight: () => ({...enemy, movement: {value: 3}}),
    attack: () => {
      const hitError = Math.floor(Math.random() * 3)
      queue(attackEntity(enemy.id, warriorPos + hitError, 2, 1, 2))
      return {...enemy, delay: {value: 4}}
    }
  }
  const action = actions[Math.floor(Math.random() * actions.length)]
  return actionMap[action]()
}

const wizardAi = createSystem(
  [[wizard, movement, position, delay], [warrior, movement, position]],
  ([wizards, warriors], args, queue) => {
    const warrior = warriors[0]
    return wizards.map(wizard => {
      if (wizard.delay.value <= 0) {
        return wizardActions(wizard, warrior, queue)
      }
      return {...wizard}
    })
  }
)

export default wizardAi