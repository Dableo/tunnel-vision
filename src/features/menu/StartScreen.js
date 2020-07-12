import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {Background, ReflectionMask} from 'features/scene/Scene'
import useKey from 'features/hooks/useKey'
import {setRoute} from 'features/game/gameSlice'
import {AnimatedBackground, TitleText, DescriptionText, CtaText} from './menuComponents'

const StartScreen = () => {
  const keyPressed = useKey('any')
  const dispatch = useDispatch()

  useEffect(() => {
    if (keyPressed) {
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
        <TitleText x="4" y="1" textAnchor="middle">Tunnelvision</TitleText>
        <DescriptionText x="4" y="1.75" textAnchor="middle">Your party warrior is on an out of control rampage!</DescriptionText>
        <DescriptionText x="4" y="1.95" textAnchor="middle">Use your spells to keep him alive</DescriptionText>
        <DescriptionText x="4" y="2.15" textAnchor="middle">Cast with number keys and aim with arrows</DescriptionText>
        <CtaText x="4" y="2.5" textAnchor="middle">Press a key to start!</CtaText>
      </g>
    </svg>
  )
}

export default StartScreen