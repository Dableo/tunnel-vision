import {addEntity, createEntitySelector} from 'ecs'

export const warriorEntity = (position=0, health=3, damage=1) => {
  return addEntity({
    'warrior': {},
    'inScene': {value: true},
    'size': {value: 1},
    'position': {value: position},
    'movement': {},
    'velocity': {value: 1},
    'collision': {},
    'solid': {},
    'health': {value: health},
    'damage': {value: damage},
    'inBounds': {},
    'delay': {value: 0},
    'frozen': {}
  })
}
export const warriorEntitySelector = createEntitySelector(['warrior', 'size', 'position', 'health', 'collision', 'frozen'])

export default warriorEntity