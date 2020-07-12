import {createSystem, removeEntity} from 'ecs'
import { spell, collision, movement, delay, frozen } from 'data'

const applyAttackDamage = createSystem(
  [[collision, frozen, movement, delay], [spell, delay]],
  ([entities, spells], args, queue) => {
    let entityDraft = [...entities]
    spells.filter(s => s.spell.value === 'ice').forEach(spell => {
      if (spell.delay.value > 0) {
        return
      }
      entities.forEach(e => {
        if (e.collision.intersections.includes(spell.id)) {
          entityDraft = [...entityDraft.filter(d => d.id !== e.id), {...e, frozen: {value: true}, delay: {value: 3}, movement: {value: 0}}]
        }
      })
      queue(removeEntity(spell.id))
    })
    return entityDraft
  }
)

export default applyAttackDamage