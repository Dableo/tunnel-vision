import {createAction} from '@reduxjs/toolkit'

let idIterator = 0;

export const addEntity = createAction('addEntity', (components) => {
  return {
    payload: {id: idIterator++, components: components.map((c) => c.toString())}
  }
})

export const removeEntity = createAction('removeEntity')
