import {createSystem, removeEntity} from 'ecs'
import { spell, collision, delay, health } from 'data'

const applyHealSpell = createSystem(
  [[collision, health], [spell, delay]],
  ([entities, spells], args, queue) => {
    let entityDraft = [...entities]
    spells.filter(s => s.spell.value === 'heal').forEach(spell => {
      if (spell.delay.value > 0) {
        return
      }
      entities.forEach(e => {
        if (e.collision.intersections.includes(spell.id)) {
          const draftEntity = entityDraft.find(d => d.id === e.id)
          const newHealth = draftEntity.health.value + 1
          entityDraft = [...entityDraft.filter(d => d.id !== e.id), {...e, health: {value: newHealth}}]
        }
      })
      queue(removeEntity(spell.id))
    })
    return entityDraft
  }
)

export default applyHealSpell