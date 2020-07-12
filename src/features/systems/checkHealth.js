import { createSystem, addComponent } from 'ecs'
import { health, dead } from 'data'
const checkHealth = createSystem([[health]], ([entities], args, queue) => {
  entities.forEach(entity => {
    if (entity.health.value <= 0) {
      queue(addComponent(entity.id, dead))
    }
  })
})
export default checkHealth