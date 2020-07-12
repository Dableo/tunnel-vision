import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import Scenes, {sceneEntity} from '../scene/Scene'
import {warriorEntity} from '../warrior'
import {enemyEntity} from '../enemy'

const WorldSvg = styled.svg`
width: 100vw;
height: 100vh;
`
const World = ({viewBox, children, ...props}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(sceneEntity(20, true))
    dispatch(warriorEntity(0, 1))
    dispatch(enemyEntity(0, 'skeleton', 5))
    dispatch(enemyEntity(0, 'skeleton', 7))
    dispatch(enemyEntity(0, 'wizard', 9))
  }, [dispatch])
  return (
    <WorldSvg>
      <Scenes/>
    </WorldSvg>
  )
}
export default World