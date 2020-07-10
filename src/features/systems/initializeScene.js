import {createSystem, events, addEntity} from 'ecs'
import {scene, camera, position} from 'data'

//apply movement to position, zero out movement
const initializeScene = createSystem(
  [],
  {
  }
)

export default initializeScene