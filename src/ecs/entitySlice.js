import {createSlice} from '@reduxjs/toolkit'

export const entitySlice = createSlice({
  name: '_entities',
  initialState: {idIterator: 0},
  reducers: {
    iterateId: state => {state.idIterator++},
  },
})

// export const selectIterateId = createSelector(state => state[entitySlice.name].idIterator)
export const {iterateId} = entitySlice.actions
export default entitySlice.reducer