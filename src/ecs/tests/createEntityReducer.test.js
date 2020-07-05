import createEntityReducer from '../createEntityReducer'
import createComponent from '../createComponent'
import createSystem from '../createSystem'
import {addEntity} from '../entity'

const testComponent = createComponent('component', {value: 0})
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
const entityReducer = createEntityReducer([testComponent], [addSystem])
const firstEntityAction = addEntity(['component'])

test('initializes with state', () => {
  expect(entityReducer({}, {type: 'someAction'})).toEqual({
    component: []
  })
})
test('adds entities', () => {
  expect(firstEntityAction).toEqual({
    type: 'addEntity',
    payload: {id: 0, components: ['component']}
  })
  expect(entityReducer({}, firstEntityAction)).toEqual({
    component: [{id: 0, value: 0}]
  })
})
test('runs systems', () => {
  const state = entityReducer({}, firstEntityAction)
  expect(entityReducer(state, {type: 'update'})).toEqual({
    component: [{id: 0, value: 1}]
  })
})
