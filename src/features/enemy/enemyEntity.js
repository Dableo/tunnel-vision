import {addEntity, createEntitySelector} from 'ecs'

export const enemyEntity = (type='skeleton', position=0, health=3) => {
  return addEntity({
    [type]: {},
    'enemy': {type: type},
    'inScene': {value: true},
    'size': {value: 1}, 
    'position': {value: position},
    'movement': {},
    'collision': {},
    'solid': {},
    'health': {value: health},
    'delay': {value: 0},
    'frozen': {},
    'animationState': {}
  })
}
export const enemyEntitySelector = createEntitySelector(['enemy', 'size', 'position', 'health', 'frozen'])

export default enemyEntity
