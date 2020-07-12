import React from 'react'
import { useSelector } from 'react-redux'
import {attackEntitySelector} from './attackEntity'
import AttackRender from './AttackRender'

const Warrior = (props) => {
  const attacks = useSelector(attackEntitySelector)
  return attacks.map(attack => <AttackRender
    key={attack.id}
    id={attack.id}
    x={attack.position.value}
    size={attack.size.value}
    damage={attack.damage.value}
    delay={attack.delay.value}
  />)
}

export default Warrior
