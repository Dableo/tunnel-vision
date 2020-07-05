import {combineReducers} from 'redux'
import reduceReducers from 'reduce-reducers'

const createEntityReducer = (components, systems) => {
  const componentReducer = combineReducers(components.reduce((obj, c) => {
    obj[c.name] = c.reducer
    return obj
  }, {}))
  const initialState = componentReducer(undefined, {type: 'initialize'})
  return reduceReducers(initialState, componentReducer, ...systems)
}

export default createEntityReducer
