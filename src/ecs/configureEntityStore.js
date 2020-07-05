import { configureStore } from '@reduxjs/toolkit'
import createEntityReducer from './createEntityReducer'

export default function configureEntityStore({components, systems}) {
  const reducer = createEntityReducer(components, systems)
  return configureStore({
    reducer: reducer
  })
}
