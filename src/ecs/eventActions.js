import {createAction} from '@reduxjs/toolkit'

let lastTime = false

export const update = createAction('update', currentTime => {
  if (!lastTime) {
    lastTime = Date.now()
  }
  let dt = (currentTime - lastTime) / 1000
  lastTime = currentTime
  return {
    payload: {dt}
  }
})
