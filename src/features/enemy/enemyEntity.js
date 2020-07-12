import {addEntity, createEntitySelector} from 'ecs'

export const enemyEntity = (sceneId, type='skeleton', position=0, health=3) => {
  return addEntity({
    [type]: {},
    'enemy': {type: type},
    'inScene': {value: sceneId},
    'size': {value: 1}, 
    'position': {value: position},
    'movement': {},
    'collision': {},
    'solid': {},
    'health': {value: health},
    'delay': {value: 0},
    'animationState': {}
  })
}
export const enemyEntitySelector = createEntitySelector(['enemy', 'size', 'position', 'health', 'animationState'])

export default enemyEntity
