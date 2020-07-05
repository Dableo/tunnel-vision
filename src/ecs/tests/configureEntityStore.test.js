import {createReducer} from '@reduxjs/toolkit'
import {configureEntityStore, createComponent, createSystem, addEntity} from '../index'
import entityReducer from '../entity'

const testComponent = createComponent('component', {value: 1})
const addSystem = createSystem(
  [testComponent],
  {
    'update': (entities) => {
      entities.forEach(entity => {
        entity[testComponent].value++
      })
      return entities
    }
  }
)
const multiplySystem = createSystem(
  [testComponent],
  {
    'update': (entities) => {
      entities.forEach(entity => {
        entity[testComponent].value = entity[testComponent].value * 2
      })
      return entities
    }
  }
)

const store = configureEntityStore({components: [testComponent], systems: [addSystem, multiplySystem]})

test('initializes with state', () => {
  expect(store.getState()).toEqual({
    _entities: {idIterator: 0},
    component: []
  })
})
test('adds entities', () => {
  store.dispatch(addEntity([testComponent]))
  store.dispatch(addEntity([testComponent]))
  expect(store.getState()).toEqual({
    _entities: {idIterator: 2},
    component: [
      {id: 0, value: 1},
      {id: 1, value: 1}
    ]
  })
})
test('runs systems', () => {
  store.dispatch({type: 'update'})
  expect(store.getState()).toEqual({
    _entities: {idIterator: 2},
    component: [
      {id: 0, value: 4},
      {id: 1, value: 4}
    ]
  })
})

