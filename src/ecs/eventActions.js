import {createAction} from '@reduxjs/toolkit'
import {executeActionQueue} from './actionQueueSlice'

export const update = createAction('update')
export const initialize = createAction('initialize')

export const runInitialize = () => (dispatch, getState) => {
  dispatch(initialize())
  executeActionQueue(dispatch, getState)
}
export const runUpdate = (dt) => (dispatch, getState) => {
  dispatch(update(dt))
  executeActionQueue(dispatch, getState)
}
