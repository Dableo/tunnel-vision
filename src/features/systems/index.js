// eslint-disable-next-line no-unused-vars
import {createGameStep} from '../gameLoop'
import applyVelocity from './applyVelocity'
import updatePosition from './updatePosition'
import applyBumps from './applyBumps'
import applyBumpDamage from './applyBumpDamage'
import checkHealth from './checkHealth'
import killEnemy from './killEnemy'
import cameraPosition from './cameraPosition'
import clampPosition from './clampPosition'
import skeletonAi from './skeletonAi'
import wizardAi from './wizardAi'
import advanceDelay from './advanceDelay'
import setIntersections from './setIntersections'
import applyAttackDamage from './applyAttackDamage'
import clearBumps from './clearBumps'
import cleanupAttacks from './cleanupAttacks'

const registerSystems = (store) => {
  //main loop
  const systems = [
    advanceDelay,
    applyVelocity,
    skeletonAi,
    wizardAi,
    applyBumps,
    cameraPosition,
    updatePosition,
    clampPosition,
    setIntersections,
    applyBumpDamage,
    applyAttackDamage,
    checkHealth,
    killEnemy,
    clearBumps,
    cleanupAttacks,
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