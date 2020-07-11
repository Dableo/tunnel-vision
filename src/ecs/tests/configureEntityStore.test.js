import {configureEcsStore, createComponent, createSystem, addEntity} from '../index'

const testComponent = createComponent('component', {value: 1})

const store = configureEcsStore([testComponent])

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
test('works with systems', () => {
  const addSystem = createSystem(
    [[testComponent]],
    ([entities]) => {
      entities.forEach(entity => {
        entity[testComponent].value++
      })
      return entities
    }
  )
  const multiplySystem = createSystem(
    [[testComponent]],
    ([entities]) => {
      entities.forEach(entity => {
        entity[testComponent].value = entity[testComponent].value * 2
      })
      return entities
    }
  )

  addSystem.execute(store)
  multiplySystem.execute(store)

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
