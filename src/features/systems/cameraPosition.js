import {createSystem} from 'ecs'
import {camera, position, active, warrior} from 'data'
const cameraPosition = createSystem(
  [[camera, position, active], [warrior, position]],
  ([cameras, warriors]) => {
    if (!warriors[0]) {
      return cameras.map(c => ({...c, position: {value: 0}}))
    }
    const warriorPos = warriors[0].position.value
    return cameras.map(c => ({...c, position: {value: warriorPos - 1}}))
  }
)

export default cameraPosition