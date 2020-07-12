import {createSystem} from 'ecs'
import {camera, position, active, warrior} from 'data'
const cameraPosition = createSystem(
  [[camera, position, active], [warrior, position]],
  ([cameras, warriors]) => {
    const warriorPos = warriors[0].position.value
    return cameras.map(c => ({...c, position: {value: warriorPos - 1}}))
  }
)

export default cameraPosition