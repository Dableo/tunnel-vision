import React from 'react'
import styled from 'styled-components'

const LabelText = styled.text`
  fill: white;
  font-size: .2px;
`
const CdText = styled.text`
  fill: white;
  font-size: .4px;
`

const CooldownIndicator = ({spell, delay, x}) => {
  const icons = {
    'ice': ({x}) => <rect fill="blue" width=".4" height=".4" y=".3" x={x}/>,
    'heal': ({x}) => <rect fill="red" width=".4" height=".4" y=".3" x={x}/>
  }
  const keyBinds = {
    'ice': '1',
    'heal': '2'
  }
  const SpellIcon = icons[spell]
  return (
    <g>
      <LabelText textAnchor="middle" x={x + .4} y="-.05">{keyBinds[spell]}</LabelText>
      <rect x={x} y=".1" width=".8" height=".8" fill="rgba(0,0,0,0.2)" stroke="white" strokeWidth=".05" />
      <SpellIcon x={x + .2}/>
      {(delay > 0) && <>
        <rect x={x} y=".1" width=".8" height=".8" fill="rgba(0,0,0,0.6)" />
        <CdText x={x + .4} y={.6} textAnchor="middle">{delay}</CdText>
      </>}
    </g>
  )
}

const HudRender = ({width, height, activeSpells}) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${activeSpells.length} 1`}>
      {activeSpells.map((spell, index) => (
        <CooldownIndicator
          x={index + .1}
          key={spell.id}
          spell={spell.activeSpell.value}
          delay={spell.delay.value}
        />
      ))}
    </svg>
  )
}

export default HudRender