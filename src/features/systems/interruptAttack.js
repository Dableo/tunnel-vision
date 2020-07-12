import {createSystem, removeEntity} from 'ecs'
import {attack, ownerId, frozen} from 'data'
const interruptAttack = createSystem(
  [[attack, ownerId], [frozen]],
  ([attacks, frozens], args, queue) => {
    frozens.forEach(ent => {
      if (ent.frozen.value === true) {
        attacks.filter(a => a.ownerId.value === ent.id).forEach(a => queue(removeEntity(a.id)))
      }
    })
  }
)
export default interruptAttack