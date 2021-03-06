import {createSystem} from 'ecs'
import {position, size, scene, active, inBounds} from 'data'
import {clamp} from 'utility'

const clampPosition = createSystem(
  [[position, size, inBounds], [scene, active, size]],
  ([entities, scenes]) => {
    const activeScenes = scenes.find(s => s.active.value === true)
    if (!activeScenes || activeScenes.length === 0) {
      return
    }
    const sceneSize = activeScenes.size.value
    return entities.map(e => {
      const entPos = e.position.value
      const entSize = e.size.value
      const newPosition = clamp(entPos, 0, (sceneSize - entSize))
      return {...e, position: {value: newPosition}}
    })
  }
)

export default clampPosition