import {createSystem, update} from 'ecs'
import {position, movement} from 'data'

//apply movement to position, zero out movement
const updatePosition = createSystem({
  select: [position, movement],
  [update]: (movers) => {
    return movers.map(({id, position, movement}) => {
      return {id, position: {x: position + movement}, movement: {dx: 0}}
    })
  }
})

export default updatePosition