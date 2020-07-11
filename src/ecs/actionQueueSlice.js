import {createSlice, createAction} from '@reduxjs/toolkit'

export const clearActionQueue = createAction('_actionQueue/clear')

export const executeActionQueue = (dispatch, getState) => {
  const actions = getState()['_actionQueue']
  actions.forEach(action => dispatch(action))
  dispatch(clearActionQueue())
}

export const actionQueueSlice = createSlice({
  name: '_actionQueue',
  initialState: [],
  reducers: {
    [clearActionQueue]: state => []
  }
})

export default actionQueueSlice.reducer