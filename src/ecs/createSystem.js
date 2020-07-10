import {createReducer, createSelector} from '@reduxjs/toolkit'
import createEntitySelector from './createEntitySelector'
import {mergeById} from 'utility'

const mergeComponents = (state, updates = []) => {
  let draft = {...state}
  updates.forEach(ent => {
    const {id, ...components} = ent
    Object.keys(components).forEach(key => {
      draft[key] = draft[key] || []
      draft[key] = mergeById(draft[key], [{id, ...components[key]}])
      // draft[key] = [...draft[key], {id, ...components[key]}]
    })
  })
  return draft
  /*
  updates = [
    {id: 0, position: {...data}, movement: {...data}}, 
    {id: 1, position: {...data}, movement: {...data}}
  ]
  state = {position: [{id: 0, ...data}, {id: 1, ...data}]}
  */

}

const createSystem = (
  select=[],
  callbacks={},
  references=[],
) => {
  const entitySelector = createEntitySelector(select)
  const referenceSelector = createSelector(
    references.map(components => createEntitySelector(components)),
    (...references) => references
  )

  const actions = Object.keys(callbacks).reduce((actions, action) => {
    return {...actions, [action]: (state, {payload}) => {
      return mergeComponents(
        state,
        callbacks[action](entitySelector(state), payload, referenceSelector(state))
      )
    }}
  }, {})
  return createReducer({}, actions)
}

export {mergeComponents}
export default createSystem