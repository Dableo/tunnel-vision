import React, {useEffect} from 'react'
import {cameraEntitySelector} from './cameraEntity'
import { createSelector } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { useSpring, animated } from 'react-spring'

const cameraSelector = createSelector(cameraEntitySelector, c => c[0])

const AnimatedCamera = ({x, children}) => {
  const [spring, setSpring] = useSpring(() => ({transform: `translate(${x * -1})`}))
  
  useEffect(() => {
    setSpring({transform: `translate(${x * -1})`})
  }, [x, setSpring])
  
  return (
    <animated.g transform={spring.transform}>{children}</animated.g>
  )
}
const Camera = ({children, ...props}) => {
  const camera = useSelector(cameraSelector)
  return (
    <AnimatedCamera x={camera ? camera.position.value : 0}>
      {children}
    </AnimatedCamera>
  )
}

export default Camera