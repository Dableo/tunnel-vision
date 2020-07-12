import {createSystem} from 'ecs'
import {position, size, collision} from 'data'

//store list of all intersections
const setIntersections = createSystem(
  [[position, size, collision]],
  ([entities]) => {
    let tiles = []
    entities.forEach(e => {
      for(let i = 0; i < e.size.value; i++) {
        const x = e.position.value + i
        tiles[x] ? tiles[x].push(e.id) : tiles[x] = [e.id]
      }
    });
    return entities.map((e) => {
      const intersections = tiles[e.position.value] ? tiles[e.position.value] : []
      return {...e, collision: {...e.collision, intersections: intersections.filter(id => id !== e.id)}}
    })
  }
)

export default setIntersections