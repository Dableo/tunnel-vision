import {addEntity, createEntitySelector} from 'ecs'

export const warriorEntity = (sceneId, position=0, health=3, damage=1) => {
  return addEntity({
    'warrior': {},
    'inScene': {value: sceneId},
    'size': {value: 1},
    'position': {value: position},
    'movement': {},
    'velocity': {value: 1},
    'collision': {},
    'solid': {},
    'health': {value: health},
    'damage': {value: damage},
    'inBounds': {}
  })
}
export const warriorEntitySelector = createEntitySelector(['warrior', 'size', 'position', 'health', 'collision'])

export default warriorEntity