import { createSlice } from '@reduxjs/toolkit'

const worldSlice = createSlice({
  name: 'world',
  initialState: {
    scene: {
      size: 20,
    },
    cameraSize: 10,
    cameraPosition: 0,
  },
})

export default worldSlice.reducer