import {createSystem} from 'ecs'
import {collision} from 'data'
const clearBumps = createSystem([[collision]], ([entities]) => {
  return entities.map(e => ({...e, collision: {...e.collision, bumps: []}}))
})
export default clearBumps