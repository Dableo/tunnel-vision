import {createSystem} from 'ecs'
import {movement, velocity, frozen} from 'data'

//add velocity to movement
const applyVelocity = createSystem([[movement, velocity, frozen]],
  ([movers]) => {
    return movers.map((mover) => {
      if (mover.frozen.value === true) {
        return true
      }
      return {
        ...mover,
        movement: {value: mover.movement.value + mover.velocity.value}
      }
    })
  }
)

export default applyVelocity