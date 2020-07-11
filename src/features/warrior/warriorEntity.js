// import {createSelector} from '@reduxjs/toolkit'
import {addEntity, createEntitySelector} from 'ecs'

export const warriorEntity = (position=0) => {
  return addEntity({'warrior': {}, 'size': {value: 1}, 'position': {value: position}})
}
export const warriorEntitySelector = createEntitySelector(['warrior', 'size', 'position'])
