import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {Background, ReflectionMask} from 'features/scene/Scene'
import useKey from 'features/hooks/useKey'
import {setRoute, nextLevel} from 'features/game/gameSlice'
import {AnimatedBackground, TitleText, DescriptionText, CtaText} from './menuComponents'

const UpgradeScreen = () => {
  const keyPressed = useKey('any')
  const dispatch = useDispatch()

  useEffect(() => {
    if (keyPressed) {
      dispatch(nextLevel())
      dispatch(setRoute('scene'))
    }
  }, [dispatch, keyPressed])

  return (
    <svg viewBox={`0 0 8 3`}>
      <AnimatedBackground>
        <Background id="0" width="20" height="1.5"/>
        <ReflectionMask id="0" width="20" height="1.5" y="1.5"/>
      </AnimatedBackground>
      <g>
        <TitleText x="4" y="1" textAnchor="middle">Level cleared!</TitleText>
        <DescriptionText x="4" y="1.75" textAnchor="middle">This is where spell upgrades would happen if I had time...</DescriptionText>
        <CtaText x="4" y="2.5" textAnchor="middle">Press a key to proceed!</CtaText>
      </g>
    </svg>
  )
}

export default UpgradeScreen