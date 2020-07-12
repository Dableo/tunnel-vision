import React from 'react'
import styled from 'styled-components'

const Reflection = styled.g`
  transform-origin: center bottom;
  transform: scale(1, -1);
`

const reflection = (Component) => ({...props}) => {
  return (
    <>
      <Component {...props}/>
      <Reflection>
        <Component {...props}/>
      </Reflection>
    </>
  )
}
export default reflection