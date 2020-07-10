import React from 'react'
import styled from 'styled-components'
import Scene from './Scene'

const WorldSvg = styled.svg`
    width: 100vw;
    height: 100vh;
`
const World = ({viewBox, children, ...props}) => {
    return (
        <WorldSvg>
            <Scene>{children}</Scene>
        </WorldSvg>
    )
}
export default World