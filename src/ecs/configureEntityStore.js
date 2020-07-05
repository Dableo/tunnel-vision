import { configureStore, combineReducers } from '@reduxjs/toolkit'
import reduceReducers from 'reduce-reducers'
import { entityReducer } from './entity'

const createEcsReducer = (components, systems) => {
  const slices = combineReducers(components.reduce((obj, c) => {
    obj[c.name] = c.reducer
    return obj
  }, {'_entities': entityReducer}))
  return reduceReducers(null, slices, ...systems)
}

export default function configureEntityStore({components, systems}) {
  const reducer = createEcsReducer(components, systems)
  return configureStore({
    reducer: reducer
  })
}
