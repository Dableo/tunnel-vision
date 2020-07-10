import React from 'react'
import styled from 'styled-components'

const Background = styled.rect`
    fill: #333;
`
const Scene = ({size, camera, children}) => {
  return (
    <svg viewBox={`0 0 ${camera.size} 1`}>
      <Background x='0' y='0' width={size} height={1}/>
      {children}
    </svg>
  )
}

export default Scene