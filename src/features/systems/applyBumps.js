import {createSystem} from 'ecs'
import {inRange} from 'utility'
import {position, movement, solid, collision} from 'data'

//reduce movement until mover won't intersect a solid
//store solids bumped into
const getBumps = (entity, others) => {
  const bumps = others.filter(o => inRange(o.position.value, entity.position.value, entity.position.value + entity.movement.value))
  return bumps.map(b => (b.id))
}
export const applyBumpsExecute = ([entities, solids]) => {
  return entities.map(entity => {
    let e = {...entity}
    let others = solids.filter(s => s.id !== e.id)
    let lastbumps = []
    let bumps = getBumps(e, others)
    while (bumps.length > 0) {
      lastbumps = bumps
      e.movement.value > 0 ? e.movement.value-- : e.movement.value++
      bumps = getBumps(e, others)
    }
    e.collision.bumps = lastbumps
    return e
  });
}

const applyBumps = createSystem(
  [[position, movement, collision], [position, solid]],
  applyBumpsExecute
)

export default applyBumps
