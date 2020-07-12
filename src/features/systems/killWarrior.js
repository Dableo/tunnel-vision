import {createSystem, removeEntityComponents} from 'ecs'
import {warrior, dead, solid, movement} from 'data'
import {setRoute} from 'features/game/gameSlice'

const killWarrior = createSystem([[warrior, dead]], ([entities], args, queue) => {
  entities.forEach(e => {
    queue(removeEntityComponents(e.id, [solid, movement]))
  })
  if(entities.length > 0) {
    queue(setRoute('gameOver'))
  }
})
export default killWarrior