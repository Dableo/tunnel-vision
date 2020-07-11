import {addEntity, createEntitySelector} from 'ecs'

export const warriorEntity = (position=0, health=3, damage=1) => {
  return addEntity({
    'warrior': {}, 
    'size': {value: 1}, 
    'position': {value: position},
    'movement': {},
    'velocity': {value: 1},
    'collision': {},
    'solid': {},
    'health': {value: health},
    'damage': {value: damage},
  })
}
export const warriorEntitySelector = createEntitySelector(['warrior', 'size', 'position', 'health'])
