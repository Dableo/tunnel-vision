import configureEntityStore from './configureEntityStore'
import createComponent from './createComponent'
import createSystem from './createSystem'
import createEntitySelector from './createEntitySelector'
import {addEntity, removeEntity} from './entity'
import {update} from './eventActions'

const addComponent = (id, component, data={}) => component.actions.add({id, data})
const removeComponent = (id, component) => component.actions.remove({id})

export {
  configureEntityStore,
  createComponent,
  createSystem,
  addComponent,
  removeComponent,
  createEntitySelector,
  addEntity,
  removeEntity,
  update
}