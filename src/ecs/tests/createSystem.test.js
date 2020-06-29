import createSystem, {mergeComponents} from '../createSystem'
import {createAction} from '@reduxjs/toolkit'

test('mergeComponents applies updates', () => {
  const initialState = {
    'component': [
      {id: 0, data: 'old'}, 
      {id: 1, data: 'old'}, 
    ]
  }
  const updates = [
    {id: 0, 'component': {data: 'new'}}
  ]
  expect(mergeComponents(initialState, updates)).toEqual({
    'component': [
      {id: 0, data: 'new'}, 
      {id: 1, data: 'old'}, 
    ]
  })
})
test('createSystem updates its components', () => {
  const initialState = {
    'component': [
      {id: 0, data: 0}
    ]
  }
  const testSystem = createSystem(
    ['component'],
    {'action': (entities) => {
      return entities.map(({id, component}) => {
        return {id, 'component': {data: component.data + 1}}
      })
    }}
  )
  expect(testSystem(initialState, {type: 'action'})).toEqual({
    'component': [
      {id: 0, data: 1}
    ]
  })
})
test('createSystem passes payload', () => {
  const setPositionAction = createAction('set position')
  const setPositionSystem = createSystem(
    ['position'],
    {[setPositionAction]: (entities, {x, y}) => {
      return entities.map((entity) => {
        return {...entity, position: {x, y}}
      })
    }}
  )
  const initialState = {
    position: [
      {id: 0, x: 0, y: 0},
      {id: 1, x: 0, y: 0},
    ]
  }
  expect(setPositionAction({x: 10, y: 20})).toEqual({
    type: 'set position',
    payload: {x: 10, y: 20}
  })

  expect(setPositionSystem(initialState, setPositionAction({x: 10, y: 20}))).toEqual({
    position: [
      {id: 0, x: 10, y: 20},
      {id: 1, x: 10, y: 20},
    ]   
  })
})
test('createSystem passes references', () => {
  const initialState = {
    'update': [
      {id: 0, value: 0}
    ],
    'reference': [
      {id: 1, value: 10}
    ]
  }
  const system = createSystem(
    ['update'],
    {'run': (entities, payload, [references]) => {
      expect(references).toEqual([{id: 1, reference: {value: 10}}])
      return entities.map((entity) => {
        return {...entity, update: {value: references[0].reference.value}}
      })
    }},
    [['reference']]
  )
  expect(system(initialState, {type: 'run'})).toEqual({
    'update': [
      {id: 0, value: 10}
    ],
    'reference': [
      {id: 1, value: 10}
    ]
  })
})