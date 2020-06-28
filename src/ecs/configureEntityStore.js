import { configureStore } from '@reduxjs/toolkit'

export default function configureEntityStore({components, systems}) {
  const componentReducer = components.reduce((obj, c) => {
    obj[c.name] = c.reducer
    return obj
  }, {})
  return configureStore({
    reducer: componentReducer
  })
}