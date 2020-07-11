import {createReducer, createSelector, createAction} from '@reduxjs/toolkit'
import createEntitySelector from './createEntitySelector'
// import actionQueueSelector from './actionQueueSlice'
import {mergeById} from 'utility'

// const mergeComponents = (state, updates = []) => {
//   let draft = {...state}
//   updates.forEach(ent => {
//     const {id, ...components} = ent
//     Object.keys(components).forEach(key => {
//       draft[key] = draft[key] || []
//       draft[key] = mergeById(draft[key], [{id, ...components[key]}])
//     })
//   })
//   return draft
// }
export const mergeComponents = createAction('mergeComponents')

export const systemReducer = createReducer({}, {
  [mergeComponents]: (state, action) => {
    /*
      state = {position: [{id: 0, ...data}, {id: 1, ...data}]}
      updates = [
        {id: 0, position: {...data}, movement: {...data}}, 
        {id: 1, position: {...data}, movement: {...data}}
      ]
    */
    const updates = action.payload || []
    let draft = {...state}
    updates.forEach(ent => {
      const {id, ...components} = ent
      Object.keys(components).forEach(key => {
        draft[key] = draft[key] || []
        draft[key] = mergeById(draft[key], [{id, ...components[key]}])
      })
    })
    return draft
  }
})

const createSystem = (
  select = [],
  executeCallback,
) => {
  const entitySelector = createSelector(
    select.map(components => createEntitySelector(components)),
    (...select) => select
  )
  const execute = (store, args) => {
    const state = store.getState()
    const actionQueue = []
    const updates = executeCallback(
      entitySelector(state),
      args,
      (action) => {actionQueue.push(action)}
    )
    store.dispatch(mergeComponents(updates))
    actionQueue.forEach((action) => {store.dispatch(action)})
  }

  return {
    selector: entitySelector,
    execute
  }
}

export default createSystem
