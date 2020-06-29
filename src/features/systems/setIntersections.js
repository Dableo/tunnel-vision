import {createSystem, update} from 'ecs'
import {position, collision} from 'data'

//store list of all intersections
const setIntersections = createSystem({
  select: [position, collision],
  [update]: (entities) => {
    let tiles = []
    entities.forEach(e => {
      const x = e.position.x
      tiles[x] ? tiles[x].push(e.id) : tiles[x] = [e.id]
    });
    return entities.map(({id, position, collision}) => {
      const intersections = tiles[position.x] ? tiles[position.x] : []
      return {
        id,
        position,
        collision: {...collision, intersections}
      }
    })
  }
})

export default setIntersections