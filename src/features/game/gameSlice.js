import {createSlice} from '@reduxjs/toolkit'

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    level: 1,
    route: 'start'
  },
  reducers: {
    nextLevel: (state) => {state.level++},
    setRoute: (state, action) => {state.route = action.payload},
  },
})

export const {nextLevel, setRoute} = gameSlice.actions
export default gameSlice.reducer