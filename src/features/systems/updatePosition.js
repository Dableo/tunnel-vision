import {createSystem} from 'ecs'
import {position, movement} from 'data'

//apply movement to position, zero out movement
const updatePosition = createSystem([[position, movement]],
  ([movers]) => {
    return movers.map((mover) => {
      return {...mover, position: {value: mover.position.value + mover.movement.value}, movement: {value: 0}}
    })
  }
)

export default updatePosition