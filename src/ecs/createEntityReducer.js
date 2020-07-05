import {combineReducers} from 'redux'
import reduceReducers from 'reduce-reducers'

const createEntityReducer = (components, systems) => {
  const componentReducer = combineReducers(components.reduce((obj, c) => {
    obj[c.name] = c.reducer
    return obj
  }, {}))
  return reduceReducers({}, componentReducer, ...systems)
}

export default createEntityReducer
