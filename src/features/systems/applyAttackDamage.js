import {createSystem, removeEntity} from 'ecs'
import { attack, collision, damage, health, delay } from 'data'

const applyAttackDamage = createSystem(
  [[health, collision], [attack, damage, delay]],
  ([entities, attacks], args, queue) => {
    let entityDraft = [...entities]
    attacks.forEach(attack => {
      if (attack.delay.value > 0) {
        return
      }
      entities.forEach(e => {
        if (e.collision.intersections.includes(attack.id)) {
          const draftEntity = entityDraft.find(d => d.id === e.id)
          const newHealth = Math.max(draftEntity.health.value - attack.damage.value, 0)
          entityDraft = [...entityDraft.filter(d => d.id !== e.id), {...e, health: {value: newHealth}}]
        }
      })
      queue(removeEntity(attack.id))
    })
    // console.log(entityDraft)
    return entityDraft
  }
)

export default applyAttackDamage