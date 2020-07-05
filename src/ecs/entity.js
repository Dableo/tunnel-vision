import {createAction, createReducer} from '@reduxjs/toolkit'

const iterateId = createAction('iterateId')

export const addEntityComponents = createAction('addEntityComponents')

export const removeEntity = createAction('removeEntity')

export const entityReducer = createReducer({idIterator: 0}, {
  [iterateId]: state => {state.idIterator++}
})

export const addEntity = (components) => (dispatch, getState) => {
  const ent_id = getState()['_entities']['idIterator']
  dispatch(iterateId())
  dispatch(addEntityComponents({id: ent_id, components: components.map((c) => c.toString())}))
}
