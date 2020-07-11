import {createSystem} from 'ecs'
import {collision, health, damage} from 'data'

//lose health when bumped
const applyBumpDamage = createSystem([[health], [collision, damage]],
  ([targets, attackers]) => {
    let damage = {}
    attackers.forEach((attacker) => {
      const target = targets.find(t => attacker.collision.bumps.includes(t.id))
      if (target) {
        damage[target.id] = damage[target.id] ? damage[target.id] + attacker.damage.value : attacker.damage.value
      }
    })
    return targets.map(t => {
      if (damage[t.id]) {
        const newHealth = Math.max(t.health.value - damage[t.id], 0)
        return {...t, health: {value: newHealth}}
      }
      return {...t}
    })
  }
)

export default applyBumpDamage