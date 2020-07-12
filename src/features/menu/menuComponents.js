import styled, { keyframes } from 'styled-components'

export const TitleText = styled.text`
  font-size: .75px;
  fill: white;
`

export const DescriptionText = styled.text`
  font-size: .15px;
  fill: white;
`

export const CtaText = styled.text`
  font-size: .2px;
  fill: white;
`

const backgroundAnimation = keyframes`
  to {
    transform: translateX(-9px);
  }
`
export const AnimatedBackground = styled.g`
  animation: ${backgroundAnimation} 15s linear infinite;
`