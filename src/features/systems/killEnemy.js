import {createSystem, removeEntityComponents} from 'ecs'
import {enemy, dead, solid, movement} from 'data'

const killEnemy = createSystem([[enemy, dead]], ([entities], args, queue) => {
  entities.forEach(e => {
    queue(removeEntityComponents(e.id, [solid, movement]))
  })
})
export default killEnemy