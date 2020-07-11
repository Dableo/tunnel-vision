// eslint-disable-next-line no-unused-vars
import {createGameStep} from '../gameLoop'
import applyVelocity from './applyVelocity'
import updatePosition from './updatePosition'
import applyBumps from './applyBumps'
import applyBumpDamage from './applyBumpDamage'
import checkHealth from './checkHealth'

const registerSystems = (store) => {
  //main loop
  const systems = [
      applyVelocity,
      applyBumps,
      applyBumpDamage,
      checkHealth,
      updatePosition
  ]
  // const step = createGameStep(store, 1000, systems)
  // step.start()
  document.addEventListener('keydown', (e) => {
    if (e.code === 'KeyA') {
      systems.forEach(s => s.execute(store))
    } else if (e.code === 'KeyS') {
    }
  }, false)
}

export default registerSystems