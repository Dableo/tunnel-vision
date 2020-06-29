import {createSystem, update} from 'ecs'
import {inRange} from 'utility'
import {position, movement, solid, collision} from 'data'

//reduce movement until mover won't intersect a solid
//store solids bumped into
const hitBumps = createSystem(
  [position, movement, collision],
  {[update]: (entities, [solids]) => {
    return entities.map(entity => {
      let e = {...entity}
      let lastbumps
      let bumps = solids.filter(s => inRange(s.position.x, e.position.x, e.position.x + e.movement.dx))
      while (bumps.length > 0) {
        lastbumps = bumps
        e.movement.dx > 0 ? e.movement.dx-- : e.movement.dx++
        bumps = solids.filter(s => inRange(s.position.x, e.position.x, e.position.x + e.movement.dx))
      }
      e.collision.bumps = lastbumps
      return e
    });
  }},
  [[position, solid]]
)

export default hitBumps
