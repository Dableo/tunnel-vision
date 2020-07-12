/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { createSelector } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import useKey from 'features/hooks/useKey'
import {setRoute} from 'features/game/gameSlice'
import {TitleText, CtaText} from './menuComponents'
import {cameraEntitySelector} from 'features/camera/cameraEntity'

const cameraSelector = createSelector(cameraEntitySelector, c => c[0])

const StartScreen = () => {
  // const keyPressed = useKey('any')
  // const dispatch = useDispatch()
  const camera = useSelector(cameraSelector)

  // useEffect(() => {
  //   if (keyPressed) {
  //     dispatch(setRoute('scene'))
  //   }
  // }, [dispatch, keyPressed])

  return (
    <svg viewBox={`0 0 ${camera ? camera.size.value : 8} 3`}>
      <g>
        <rect width="100%" height="100%" fill="rgba(0,0,0,0.7)"/>
        <TitleText x={camera ? camera.size.value / 2 : 4} y="1" textAnchor="middle">Your warrior has fallen!</TitleText>
        <CtaText x={camera ? camera.size.value / 2 : 4} y="2.5" textAnchor="middle">Sorry, no restart option :(</CtaText>
      </g>
    </svg>
  )
}

export default StartScreen