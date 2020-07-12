import {useState, useEffect, useCallback} from 'react'

function useKey(key) {
  // Keep track of key state
  const [pressed, setPressed] = useState(false)

  // Event handlers
  const onDown = useCallback(event => {
    const match = event => key.toLowerCase() === event.key.toLowerCase()
    if (key === 'any' || match(event)) setPressed(true)
  }, [key])
  
  const onUp = useCallback(event => {
    const match = event => key.toLowerCase() === event.key.toLowerCase()
    if (key === 'any' || match(event)) setPressed(false)
  }, [key])

  // Bind and unbind events
  useEffect(() => {
      window.addEventListener("keydown", onDown)
      window.addEventListener("keyup", onUp)
      return () => {
          window.removeEventListener("keydown", onDown)
          window.removeEventListener("keyup", onUp)
      }
  }, [key, onUp, onDown])

  return pressed
}

export default useKey