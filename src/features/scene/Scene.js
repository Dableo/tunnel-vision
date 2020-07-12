import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'

import {sceneEntitySelector} from './sceneEntity'
import Warrior from '../warrior'
import Enemy from '../enemy'
import reflection from 'features/render/reflection'
import {cameraEntitySelector} from 'features/camera/cameraEntity'
import Camera from 'features/camera/Camera'
import Attack from 'features/attack/Attack'
import Spells from 'features/spells/Spells'
import sceneInitialize from './sceneInitialize'
import Hud from 'features/hud/Hud'

const cameraSelector = createSelector(cameraEntitySelector, c => c[0])

const tilePalette = [
  '#161001',
  '#353026',
  '#544e43',
  '#676156',
  '#8e887c',
]
export const Background = ({id, width, height}) => {
  const tiles = [...tilePalette, ...[...tilePalette].reverse().slice(1)]
  const BackgroundSprite = reflection(props => <rect className={props.className} x='0' y='0' width="100%" height="100%" fill={`url(#${id}-background-pattern)`}/>)
  return (
    <svg width={width} height={height}>
      <pattern id={id + "-background-pattern"} x="0" y="0" width={tiles.length} height={height} patternUnits="userSpaceOnUse" >
        {tiles.map((t, i) => <rect key={i} x={i} y="0" width="1" height={height} fill={t}/>)}
      </pattern>
      <BackgroundSprite/>
    </svg>
  )
}

export const ReflectionMask = ({id, width, y, height}) => {
  return (
    <>
      <linearGradient id={id + "-reflection-gradient"} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopOpacity="0.3" />
        <stop offset="60%" stopOpacity="1" />
      </linearGradient>
      <rect width={width} y={y} height={height} fill={`url(#${id}-reflection-gradient)`}/>
    </>
  )
}

const Scene = ({id, size}) => {
  const dispatch = useDispatch()
  const camera = useSelector(cameraSelector)
  useEffect(() => {
    sceneInitialize(dispatch, id, size)
  }, [id, dispatch, size])
  return (
    <svg id={id} viewBox={`0 0 ${camera ? camera.size.value : 8} 3`}>
      <Camera>
        <Background id={id} width={size} height="1.5"/>
        <g transform="translate(0 .5)">
          <Enemy />
          <Warrior />
        </g>
        <ReflectionMask id={id} width={size} height="1.5" y="1.5"/>
        <g transform="translate(0 .5)">
          <Attack />
          <Spells />
        </g>
      </Camera>
      <g transform="translate(0 2.25)">
        <Hud height=".75"/>
      </g>
    </svg>
  )
}

const Scenes = () => {
  const scenes = useSelector(sceneEntitySelector)
  return scenes.map((scene) => <Scene key={scene.id} id={scene.id} size={scene.size.value} />)
}

export default Scenes