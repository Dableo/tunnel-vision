import {addEntity, createEntitySelector} from 'ecs'

export const cameraEntity = (size=10, active=true) => {
  return addEntity({
    'camera': {},
    'size': {value: size},
    'position': {},
    'active': {value: active},
    'inBounds': {}
  })
}
export const cameraEntitySelector = createEntitySelector(['camera', 'size', 'position', 'active'])

export default cameraEntity