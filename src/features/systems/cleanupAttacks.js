import {createSystem, removeEntity} from 'ecs'
import {attack, ownerId, dead} from 'data'
const cleanupAttacks = createSystem(
  [[attack, ownerId], [dead]],
  ([attacks, deads], args, queue) => {
    deads.forEach(d => {
      attacks.filter(a => a.ownerId.value === d.id).forEach(a => queue(removeEntity(a.id)))
    })
  }
)
export default cleanupAttacks