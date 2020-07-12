import {createSystem} from 'ecs'
import { activeSpell, delay, warrior, position } from 'data'
import {iceSpellEntity} from 'features/spells/spellEntity'
import {healSpellEntity} from 'features/spells/spellEntity'

const castSpell = createSystem(
  [[activeSpell, delay], [warrior, position]],
  ([activeSpells, warriors], {key}, queue) => {
    // console.log(key)
    const defaultSpellPosition = warriors[0] ? warriors[0].position.value : 0
    let activeSpellDraft = []
    const activeIce = activeSpells.find(s => s.activeSpell.value === 'ice')
    const activeHeal = activeSpells.find(s => s.activeSpell.value === 'heal')
    if (key === 'Digit1' && activeIce && activeIce.delay.value <= 0) {
      queue(iceSpellEntity(defaultSpellPosition))
      activeSpellDraft.push({...activeIce, delay: {value: 5}})
    }
    if (key === 'Digit2' && activeHeal && activeHeal.delay.value <= 0) {
      queue(healSpellEntity(defaultSpellPosition))
      activeSpellDraft.push({...activeHeal, delay: {value: 8}})
    }
    return activeSpellDraft
  }
)
export default castSpell