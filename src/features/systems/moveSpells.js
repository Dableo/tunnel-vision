import {createSystem} from 'ecs'
import { spell, position } from 'data'

const moveSpells = createSystem(
  [[spell, position]],
  ([spells], {key}, queue) => {
    return spells.map(spell => {
      let movement = 0
      if (key === 'ArrowLeft') {
        movement = -1
      } else if (key === 'ArrowRight') {
        movement = 1
      }
      return {...spell, position: {value: spell.position.value + movement}}
    })
  }
)
export default moveSpells