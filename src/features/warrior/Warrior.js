import React from 'react'
import { useSelector } from 'react-redux'
import {warriorEntitySelector} from './warriorEntity'
import WarriorRender from './WarriorRender'

const Warrior = (props) => {
  // const dispatch = useDispatch()
  const warriors = useSelector(warriorEntitySelector)
  return warriors.map(warrior => <WarriorRender key={warrior.id} id={warrior.id} x={warrior.position.value} health={warrior.health.value}/>)
}

export default Warrior
