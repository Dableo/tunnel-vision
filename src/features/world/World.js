import React from 'react'
import styled from 'styled-components'
import { createSelector } from '@reduxjs/toolkit'
import Scene from './Scene'
import { createEntitySelector } from 'ecs'
import { useSelector } from 'react-redux'

const WorldSvg = styled.svg`
    width: 100vw;
    height: 100vh;
`

const sceneSelector = createEntitySelector(['scene'])
const cameraSelector = createSelector(createEntitySelector(['camera', 'position']), (s) => s[0])

const World = ({viewBox, children, ...props}) => {
    const scenes = useSelector(sceneSelector)
    const camera = useSelector(cameraSelector)
    return (
        <WorldSvg>
            {scenes.filter(s => s.scene.active === true).map(({scene}) => (
                <Scene size={scene.size} camera={camera}>
                </Scene>
            ))}
        </WorldSvg>
    )
}
export default World