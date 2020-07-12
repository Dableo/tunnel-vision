import {useEffect} from 'react'
import {useSpring} from 'react-spring'

const useMovementSpring = (x) => {
  const [spring, setSpring] = useSpring(() => ({x: x}))
  useEffect(() => {
    setSpring({x: x})
  }, [x, setSpring])
  return [spring]
}

export default useMovementSpring