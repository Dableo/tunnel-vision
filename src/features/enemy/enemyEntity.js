import {addEntity, createEntitySelector} from 'ecs'

export const enemyEntity = (position=0, health=3) => {
  return addEntity({
    'enemy': {}, 
    'size': {value: 1}, 
    'position': {value: position},
    'movement': {},
    // 'collision': {},
    'solid': {},
    'health': {value: health},
  })
}
export const enemyEntitySelector = createEntitySelector(['enemy', 'size', 'position', 'health'])
