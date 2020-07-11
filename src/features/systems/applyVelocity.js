import {createSystem} from 'ecs'
import {movement, velocity} from 'data'

//add velocity to movement
const applyVelocity = createSystem([[movement, velocity]],
  ([movers]) => {
    return movers.map((mover) => {
      return {
        ...mover,
        movement: {value: mover.movement.value + mover.velocity.value}
      }
    })
  }
)

export default applyVelocity