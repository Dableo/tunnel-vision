import React from 'react'
import styled from 'styled-components'

const WorldSvg = styled.svg`
    width: 100vw;
    height: 100vh;
`
const Background = styled.rect`
    fill: ${props => props.backgroundColor};
`


const World = ({viewBox, children, ...props}) => {
    return (
        <WorldSvg viewBox={`0 0 ${viewBox.w} ${viewBox.h}`}>
            <Background {...props} x='0' y='0' width={viewBox.w} height={viewBox.h}/>
            {children}
        </WorldSvg>
    )
}

World.defaultProps = {
    viewBox: {w: 1000, h: 200},
    backgroundColor: '#333'
}

export default World