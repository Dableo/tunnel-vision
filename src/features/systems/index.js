// eslint-disable-next-line no-unused-vars
import createGameFixedUpdate from 'features/game/createGameFixedUpdate'
import createGameInputUpdate from 'features/game/createGameInputUpdate'

import applyVelocity from './applyVelocity'
import updatePosition from './updatePosition'
import applyBumps from './applyBumps'
import applyBumpDamage from './applyBumpDamage'
import checkHealth from './checkHealth'
import killEnemy from './killEnemy'
import killWarrior from './killWarrior'
import cameraPosition from './cameraPosition'
import clampPosition from './clampPosition'
import skeletonAi from './skeletonAi'
import wizardAi from './wizardAi'
import advanceDelay from './advanceDelay'
import setIntersections from './setIntersections'
import applyAttackDamage from './applyAttackDamage'
import clearBumps from './clearBumps'
import cleanupAttacks from './cleanupAttacks'
import endScene from './endScene'
import castSpell from './castSpell'
import moveSpells from './moveSpells'
import interruptAttack from './interruptAttack'
import applyIceSpell from './applyIceSpell'
import unfreeze from './unfreeze'

export const registerSystems = (store) => {
  //main loop
  const systems = [
    endScene,
    advanceDelay,
    unfreeze,
    applyVelocity,
    skeletonAi,
    wizardAi,
    applyBumps,
    updatePosition,
    cameraPosition,
    clampPosition,
    setIntersections,
    applyIceSpell,
    applyBumpDamage,
    applyAttackDamage,
    checkHealth,
    killEnemy,
    killWarrior,
    clearBumps,
    interruptAttack,
    cleanupAttacks,
  ]
  const inputSystems = [
    castSpell,
    moveSpells
  ]
  const inputStep = createGameInputUpdate(store, inputSystems)
  const fixedStep = createGameFixedUpdate(store, systems)
  return {
    start: (timeout=1000) => {
      inputStep.start()
      fixedStep.start(timeout)
    },
    stop: () => {
      inputStep.stop()
      fixedStep.stop()
    },
  }
}

export default registerSystems