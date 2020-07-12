import React from 'react'
import { activeSpellEntitySelector } from 'features/spells/spellEntity'
import { useSelector } from 'react-redux'
import HudRender from './HudRender'
// import {attackEntitySelector} from './attackEntity'
// import AttackRender from './AttackRender'

const Hud = (props) => {
  const activeSpells = useSelector(activeSpellEntitySelector)
  return <HudRender {...props} activeSpells={activeSpells}/>
}

export default Hud
