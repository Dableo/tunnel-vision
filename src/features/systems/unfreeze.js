import {createSystem} from 'ecs'
import {frozen, delay} from 'data'

const unfreeze = createSystem(
  [[frozen, delay]],
  ([entities]) => {
    return entities.map(ent => {
      if (ent.frozen.value && ent.delay.value <= 0) {
        return {...ent, frozen: {value: false}}
      }
      return ent
    })
  }
)

export default unfreeze