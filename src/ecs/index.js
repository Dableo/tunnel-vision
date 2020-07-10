// import {createAction} from '@reduxjs/toolkit'
import configureEntityStore, {addComponent, removeComponent, addEntity, addEntityComponents, removeEntity} from './configureEntityStore'
import createComponent from './createComponent'
import createSystem from './createSystem'
import createEntitySelector from './createEntitySelector'
import * as events from './eventActions'
// import {iterateId} from './entitySlice'

// const addComponent = (id, component, data={}) => component.actions.add({id, data})
// const removeComponent = (id, component) => component.actions.remove({id})
// const addEntityComponents = createAction('addEntityComponents')

// const addEntity = (components) => (dispatch, getState) => {
//   const ent_id = getState()['ecs']['_entities']['idIterator']
//   dispatch(iterateId())
//   dispatch(addEntityComponents({id: ent_id, components: components.map((c) => c.toString())}))
// }
// const removeEntity = createAction('removeEntity')

export {
  configureEntityStore,
  createComponent,
  createSystem,
  addComponent,
  removeComponent,
  createEntitySelector,
  addEntity,
  addEntityComponents,
  removeEntity,
  events
}