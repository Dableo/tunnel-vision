import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {addEntity, createEntitySelector} from 'ecs'
import { createSelector } from '@reduxjs/toolkit'

import Warrior from '../warrior'
import Enemy from '../enemy'
import reflection from 'features/reflection/Reflection'

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
const Background = ({id, width, height}) => {
  const tiles = [...tilePalette, ...[...tilePalette].reverse().slice(1)]
  const BackgroundSprite = reflection(props => <rect x='0' y='0' width="100%" height="100%" fill={`url(#${id}-background-pattern)`}/>)
  return (
    <svg width={width} height={height}>
      <pattern id={id + "-background-pattern"} x="0" y="0" width={tiles.length} height={height} patternUnits="userSpaceOnUse" >
        {tiles.map((t, i) => <rect key={i} x={i} y="0" width="1" height={height} fill={t}/>)}
      </pattern>
      <BackgroundSprite/>
    </svg>
  )
}

const ReflectionMask = ({id, width, y, height}) => {
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
  const camera = useSelector(cameraEntitySelector)
  return (
    <svg id={id} viewBox={`0 0 ${camera ? camera.size.value : 5} 3`}>
      <g transform={`translate(${camera ? camera.position.value : 0})`}>
        <Background id={id} width={size} height="1.5"/>
        <g transform="translate(0 .5)">
          <Warrior />
          <Enemy />
        </g>
        <ReflectionMask id={id} width={size} height="1.5" y="1.5"/>
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