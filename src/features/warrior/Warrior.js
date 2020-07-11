import React from 'react'
import { useSelector } from 'react-redux'
import {warriorEntitySelector} from './warriorEntity'
import WarriorRender from './WarriorRender'

const Warrior = (props) => {
  // const dispatch = useDispatch()
  const warriors = useSelector(warriorEntitySelector)
  return warriors.map(warrior => <WarriorRender x={warrior.position.value}/>)
}

export default Warrior
