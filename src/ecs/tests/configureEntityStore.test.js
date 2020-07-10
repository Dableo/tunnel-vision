import {configureEntityStore, createComponent, createSystem, addEntity} from '../index'
import {initialize} from '../eventActions'

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
  store.dispatch(addEntity({[testComponent]: {}}))
  store.dispatch(addEntity({[testComponent]: {value: 2}}))
  expect(store.getState()).toEqual({
    _entities: {idIterator: 2},
    component: [
      {id: 0, value: 1},
      {id: 1, value: 2}
    ]
  })
})
test('runs systems', () => {
  store.dispatch({type: 'update'})
  expect(store.getState()).toEqual({
    _entities: {idIterator: 2},
    component: [
      {id: 0, value: 4},
      {id: 1, value: 6}
    ]
  })
})
test('runs at scale', () => {
  for (let i = 0; i < 100; i++) {
    store.dispatch(addEntity({[testComponent]: {}}))
  }
  expect((() => {
    const startTime = Date.now()
    store.dispatch({type: 'update'})
    return (Date.now() - startTime)
  })()).toBeLessThan(200)
})
