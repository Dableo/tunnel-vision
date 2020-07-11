import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {addEntity, createEntitySelector} from 'ecs'
import { createSelector } from '@reduxjs/toolkit'

import Warrior from '../warrior'

const cameraEntity = (size=10) => {
  return addEntity({'camera': {}, 'size': {value: size}, 'position': {}})
}
const cameraEntitySelector = createSelector(createEntitySelector(['camera', 'size', 'position']), (s) => s[0])

export const sceneEntity = (size=20, active=false) => {
  return addEntity({'scene': {}, 'size': {value: size}, 'active': {value: active}})
}
export const sceneEntitySelector = createEntitySelector(['scene', 'size', 'active'])


const tilePalette = [
  '#161001',
  '#353026',
  '#544e43',
  '#676156',
  '#8e887c',
]
const BackgroundPattern = ({id}) => {
  const tiles = [...tilePalette, ...tilePalette.reverse().slice(1)]
  return (
    <pattern id={id + "-background-pattern"} x="0" y="0" width={tiles.length} height="1" patternUnits="userSpaceOnUse" >
      {tiles.map((t, i) => <rect key={i} x={i} y="0" width="1" height="1" fill={t}/>)}
    </pattern>
  )
}

const Scene = ({id, size}) => {
  const camera = useSelector(cameraEntitySelector)
  return (
    <svg id={id} viewBox={`0 0 ${camera ? camera.size.value : 5} 1`}>
      <BackgroundPattern id={id}/>
      <g transform={`translate(${camera ? camera.position.value : 0})`}>
        <rect x='0' y='0' width={size} height={1} fill={`url(#${id}-background-pattern)`}/>
        <Warrior />
      </g>
    </svg>
  )
}

const Scenes = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(cameraEntity())
  }, [dispatch])

  const scenes = useSelector(sceneEntitySelector)

  return scenes.filter(s => s.active.value === true)
    .map((scene) => <Scene key={scene.id} id={scene.id} size={scene.size.value}></Scene>)
}

export default Scenes