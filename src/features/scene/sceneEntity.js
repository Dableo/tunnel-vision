import {addEntity, createEntitySelector} from 'ecs'

export const sceneEntitySelector = createEntitySelector(['scene', 'size', 'active'])

export const sceneEntity = (size = 15, active = true) => {
  return addEntity({
    'scene': {},
    'size': {value: size},
    'active': {value: active}
  })
}

export default sceneEntity