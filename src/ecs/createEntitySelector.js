import {createSelector} from '@reduxjs/toolkit'

const getComponentData = (component) => {
  const {id, ...data} = component
  return data
}
const createEntitySelector = (componentNames=[]) => createSelector(
  componentNames.map((c) => state => state[c]),
  (...components) => {
    return components[0].reduce((acc, curr) => {
      let ent = {
        id: curr.id,
        [componentNames[0]]: getComponentData(curr)
      }
      for (let index = 1; index < components.length; index++) {
        const component = components[index].find(c => c.id === curr.id)
        if (component) {
          ent[componentNames[index]] = getComponentData(component)
        } else  {
          return acc
        }
      }
      return [...acc, ent]
    }, [])
  }
)

export default createEntitySelector