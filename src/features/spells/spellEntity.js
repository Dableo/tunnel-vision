import {addEntity, createEntitySelector} from 'ecs'

export const spellEntitySelector = createEntitySelector(['spell', 'position', 'size', 'delay'])

export const activeSpellEntitySelector = createEntitySelector(['activeSpell', 'delay'])

export const activeSpellEntity = (spellType, delay) => {
  return addEntity({
    'activeSpell': {value: spellType},
    'delay': {value: delay},
    'inScene': {value: true}
  })
}
export const spellEntity = (spellType, position, size, delay) => {
  return addEntity({
    'spell': {value: spellType},
    'position': {value: position},
    'size': {value: size},
    'collision': {},
    'inScene': {value: true},
    'delay': {value: delay},
  })
}
export const iceSpellEntity = (position) => spellEntity('ice', position, 3, 3)

export default spellEntity