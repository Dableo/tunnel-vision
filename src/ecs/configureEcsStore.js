import { configureStore, combineReducers, createAction } from '@reduxjs/toolkit'
import reduceReducers from 'reduce-reducers'
import {entitySlice, iterateId} from './entitySlice'
import {systemReducer} from './createSystem'

export const addComponent = (id, component, data={}) => component.actions.add({id, data})
export const removeComponent = (id, component) => component.actions.remove({id})
export const addEntityComponents = createAction('addEntityComponents')
export const removeEntityComponents = createAction('removeEntityComponents', (id, components) => {
  return {payload: {
    id,
    components: components.map(c => c.toString())
  }}
})

export const addEntity = (components) => (dispatch, getState) => {
  const ent_id = getState()[entitySlice.name].idIterator
  dispatch(iterateId())
  dispatch(addEntityComponents({id: ent_id, components}))
}

export const removeEntity = createAction('removeEntity', (id) => ({payload: {id}}))

const createEcsReducer = (components = [], extraSlices = []) => {
  const slices = combineReducers([entitySlice, ...components, ...extraSlices].reduce((obj, c) => {
    obj[c.name] = c.reducer
    return obj
  }, {}))
  return reduceReducers({}, slices, systemReducer)
}

const configureEcsStore = (components, extraSlices) => {
  return configureStore({
    reducer: createEcsReducer(components, extraSlices),
  })
}

export default configureEcsStore