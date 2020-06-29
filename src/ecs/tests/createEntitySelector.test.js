import createEntitySelector from '../createEntitySelector'
import {createSelector} from '@reduxjs/toolkit'

test('createEntitySelector translates components into iterable entities', () => {
  // const state = {
  //   'component 1': [
  //     {id: 0, data: 'component 1 data'},
  //   ],
  //   'component 2': [
  //     {id: 0, data: 'component 2 data'},
  //   ],
  // }
  const complexState = {
    'component 1': [
      {id: 0, data: 'component 1 data'},
      {id: 1, data: 'component 1 data'},
      {id: 2, data: 'component 1 data'},
    ],
    'component 2': [
      {id: 0, data: 'component 2 data'},
      {id: 1, data: 'component 2 data'},
    ],
    'component 3': [
      {id: 0, data: 'component 3 data'},
      {id: 1, data: 'component 3 data'},
      {id: 2, data: 'component 3 data'},
    ],
  }
  const selector = createEntitySelector(['component 1', 'component 2'])
  expect(selector(complexState)).toEqual([
    {
      id: 0,
      'component 1': {data: 'component 1 data'},
      'component 2': {data: 'component 2 data'}
    },
    {
      id: 1,
      'component 1': {data: 'component 1 data'},
      'component 2': {data: 'component 2 data'}
    }
  ])
})

test('createEntitySelector can be combined with createSelector', () => {
  const references = [['component 1', 'component 2'], ['component 3']]
  const referenceSelector = createSelector(
    references.map(components => createEntitySelector(components)),
    (...references) => references
  )
  const initialState = {
    'component 1': [
      {id: 0, data: 'component 1 data'},
      {id: 1, data: 'component 1 data'},
      {id: 2, data: 'component 1 data'},
    ],
    'component 2': [
      {id: 0, data: 'component 2 data'},
      {id: 1, data: 'component 2 data'},
    ],
    'component 3': [
      {id: 0, data: 'component 3 data'},
      {id: 1, data: 'component 3 data'},
      {id: 2, data: 'component 3 data'},
    ],
  }
  expect(referenceSelector(initialState)).toEqual([
    [
      {
        id: 0,
        'component 1': {data: 'component 1 data'},
        'component 2': {data: 'component 2 data'}
      },
      {
        id: 1,
        'component 1': {data: 'component 1 data'},
        'component 2': {data: 'component 2 data'}
      }
    ],
    [
      {
        id: 0,
        'component 3': {data: 'component 3 data'},
      },
      {
        id: 1,
        'component 3': {data: 'component 3 data'},
      },
      {
        id: 2,
        'component 3': {data: 'component 3 data'},
      },
    ]
  ])
})