import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import StartScreen from 'features/menu/StartScreen'
import UpgradeScreen from 'features/menu/UpgradeScreen'
import GameOverScreen from 'features/menu/GameOverScreen'
import cameraEntity from 'features/camera/cameraEntity'
import sceneEntity from 'features/scene/sceneEntity'
import Scenes from 'features/scene/Scene'

const WorldSvg = styled.svg`
width: 100vw;
height: 100vh;
`
const World = ({gameLoop, ...props}) => {
  const dispatch = useDispatch()
  const {level, route} = useSelector(state => state.game)
  
  const difficulty = useRef(level)

  useEffect(() => {
    difficulty.current = level
  }, [difficulty, level])

  useEffect(() => {
    dispatch(cameraEntity())
  }, [dispatch])
  
  useEffect(() => {
    if (route === 'scene') {
      const sceneSize = 10 + difficulty.current * 5
      const tickSpeed = Math.max(300, 1050 - difficulty.current * 150)
      dispatch(sceneEntity(sceneSize))
      gameLoop.start(tickSpeed)
    } else {
      gameLoop.stop()
    }
  }, [route, difficulty, dispatch, gameLoop])
  
  const routes = {
    'start': <StartScreen/>,
    'scene': <Scenes/>,
    'upgrade': <UpgradeScreen/>,
    'gameOver': <><Scenes/><GameOverScreen/></>
  }
  
  return (
    <WorldSvg>
      {routes[route]}
    </WorldSvg>
  )
}
export default World