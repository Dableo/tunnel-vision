import {createSystem, removeEntity} from 'ecs'
import {sceneEnd, collision, warrior, scene, inScene} from 'data'
import {setRoute} from 'features/game/gameSlice'

const endScene = createSystem(
  [[sceneEnd, collision], [warrior], [scene], [inScene]],
  ([sceneEnders, warriors, scenes, entsInScene], args, queue) => {
    if (!warriors[0] || !sceneEnders[0] || !scenes[0]) {
      return
    }
    if(sceneEnders[0].collision.intersections.includes(warriors[0].id)) {
      entsInScene.forEach(e => queue(removeEntity(e.id)))
      queue(setRoute('upgrade'))
      queue(removeEntity(scenes[0].id))
    }
  }
)

export default endScene