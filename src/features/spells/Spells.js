import React from 'react'
import { useSelector } from 'react-redux'
import {spellEntitySelector} from './spellEntity'
import SpellRender from './SpellRender'

const Spells = (props) => {
  const spells = useSelector(spellEntitySelector)
  return spells.map(spell => <SpellRender
    key={spell.id}
    id={spell.id}
    spellType={spell.spell.value}
    x={spell.position.value}
    size={spell.size.value}
    delay={spell.delay.value}
  />)
}

export default Spells
