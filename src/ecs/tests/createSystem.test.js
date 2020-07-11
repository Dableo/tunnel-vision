import createSystem, {systemReducer, mergeComponents} from '../createSystem'
import {configureStore} from '@reduxjs/toolkit'

test('systemReducer applies updates', () => {
  const initialState = {
    'component': [
      {id: 0, data: 'old'}, 
      {id: 1, data: 'old'}, 
    ]
  }
  const updates = [
    {id: 0, 'component': {data: 'new'}}
  ]
  expect(systemReducer(initialState, mergeComponents(updates))).toEqual({
    'component': [
      {id: 0, data: 'new'}, 
      {id: 1, data: 'old'}, 
    ]
  })
})

test('createSystem updates its components', () => {
  const store = configureStore({
    preloadedState: {
      'component': [
        {id: 0, data: 0}
      ]
    },
    reducer: systemReducer
  })
  const testSystem = createSystem(
    store,
    [['component']],
    ([entities]) => {
      return entities.map(({id, component}) => {
        return {id, 'component': {data: component.data + 1}}
      })
    }
  )
  testSystem.execute()
  expect(store.getState()).toEqual({
    'component': [
      {id: 0, data: 1}
    ]
  })
})
test('createSystem selects multiple entity groups', () => {
  const store = configureStore({
    preloadedState: {
      'update': [
        {id: 0, value: 0}
      ],
      'reference': [
        {id: 1, value: 10}
      ]
    },
    reducer: systemReducer
  })
  const system = createSystem(
    store,
    [['update'], ['reference']],
    ([entities, references], payload) => {
      expect(references).toEqual([{id: 1, reference: {value: 10}}])
      return entities.map((entity) => {
        return {...entity, update: {value: references[0].reference.value}}
      })
    },
  )
  system.execute()
  expect(store.getState()).toEqual({
    'update': [
      {id: 0, value: 10}
    ],
    'reference': [
      {id: 1, value: 10}
    ]
  })
})