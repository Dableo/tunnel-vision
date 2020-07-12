import {createSystem} from 'ecs'
import {position, movement, solid, collision} from 'data'
import {inRange} from 'utility'

//reduce movement until mover won't intersect a solid
//store solids bumped into
const getBumps = (entity, others) => {
  const ePos1 = entity.position.value
  const ePos2 = entity.position.value + entity.movement.value
  const bumps = others.filter(o => {
    const oPos1 = o.position.value
    const oPos2 = o.position.value + o.movement.value
    // return (Math.min(ePos1, ePos2) <= Math.max(oPos1, oPos2)
    //   && Math.min(oPos1, oPos2) <= Math.max(ePos1, ePos2))
    return inRange(oPos1, ePos1, ePos2)
      || ePos2 === oPos2
  })
  return bumps.map(b => ([b.id, ePos1 < b.position.value ? 'right' : 'left']))
}
export const applyBumpsExecute = ([entities]) => {
  let entityDraft = [...entities.reverse()]
  entities.forEach(entity => {
    let e = {...entity}
    let others = entityDraft.filter(s => s.id !== e.id)
    let lastbumps = []
    let bumps = getBumps(e, others)
    while (bumps.length > 0 && e.movement.value !== 0) {
      lastbumps = bumps
      e.movement.value > 0 ? e.movement.value-- : e.movement.value++
      bumps = getBumps(e, others)
    }
    e.collision.bumps = lastbumps
    return e
  });
  return entityDraft
}

const applyBumps = createSystem(
  [[position, movement, solid, collision]],
  applyBumpsExecute
)

export default applyBumps
