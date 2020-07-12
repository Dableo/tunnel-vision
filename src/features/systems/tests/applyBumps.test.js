import {position, movement, solid, collision} from 'data'
import applyBumps, {applyBumpsExecute} from '../applyBumps'
import { configureStore } from '@reduxjs/toolkit'
import { addEntityComponents } from 'ecs'

test.skip('apply bumps', () => {
  const store = configureStore({
    reducer: {
      [position]: position.reducer,
      [movement]: movement.reducer,
      [solid]: solid.reducer,
      [collision]: collision.reducer,
    }
  })
  store.dispatch(addEntityComponents({
    id: 0,
    components: {
      [position]: {value: 0},
      [movement]: {value: 1},
      [collision]: {},
      [solid]: {},
    }
  }))
  store.dispatch(addEntityComponents({
    id: 1,
    components: {
      [position]: {value: 1},
      [movement]: {value: 0},
      [collision]: {},
      [solid]: {},
    }
  }))
  const entities = applyBumps.selector(store.getState())
  expect(entities).toEqual([
    {
      id: 0, 
      position: {value: 0},
      movement: {value: 1},
      collision: {bumps: [], intersections: []},
      solid: {}
    },
    {
      id: 1,
      position: {value: 1},
      movement: {value: 0},
      collision: {bumps: [], intersections: []},
      solid: {}
    }
  ])
  const bumpedEntities = applyBumpsExecute(entities)
  expect(bumpedEntities).toEqual([
    {
      id: 0, 
      position: {value: 0},
      movement: {value: 0},
      collision: {bumps: [[1, 'right']], intersections: []}
    }
  ])
})