import {addEntity, createEntitySelector} from 'ecs'

export const attackEntity = (ownerId=0, position=0, size=1, damage=1, delay=1) => {
  return addEntity({
    'attack': {},
    'position': {value: position},
    'size': {value: size}, 
    'collision': {},
    'damage': {value: damage},
    'delay': {value: delay},
    'ownerId': {value: ownerId},
    'inScene': {value: true},
  })
}
export const attackEntitySelector = createEntitySelector(['attack', 'size', 'position', 'damage', 'delay', 'ownerId'])

export default attackEntity
