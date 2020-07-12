import {addEntity, createEntitySelector} from 'ecs'

export const sceneEndEntitySelector = createEntitySelector(['position', 'size'])

export const sceneEndEntity = (position) => {
  return addEntity({
    'sceneEnd': {},
    'position': {value: position},
    'size': {value: 1},
    'collision': {},
    'inScene': {value: true}
  })
}

export default sceneEndEntity