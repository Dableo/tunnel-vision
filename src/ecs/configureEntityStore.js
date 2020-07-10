import { configureStore, combineReducers, createAction } from '@reduxjs/toolkit'
import reduceReducers from 'reduce-reducers'
import {entitySlice, iterateId} from './entitySlice'

export const addComponent = createAction('addComponent', (id, component, data={}) => component.actions.add({id, data}))
export const removeComponent = createAction('removeComponent', (id, component) => component.actions.remove({id}))
export const addEntityComponents = createAction('addEntityComponents')

export const addEntity = (components) => (dispatch, getState) => {
  const ent_id = getState()[entitySlice.name].idIterator
  dispatch(iterateId())
  dispatch(addEntityComponents({id: ent_id, components: components.map((c) => c.toString())}))
}

export const removeEntity = createAction('removeEntity')

const createEcsReducer = (components = [], systems = []) => {
  const slices = combineReducers([entitySlice, ...components].reduce((obj, c) => {
    obj[c.name] = c.reducer
    return obj
  }, {}))
  return reduceReducers({}, slices, ...systems)
}

const configureEcsStore = ({components, systems}) => {
  return configureStore({
    reducer: createEcsReducer(components, systems),
  })
}

export default configureEcsStore