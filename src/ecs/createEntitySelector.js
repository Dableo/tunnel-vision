import {createSelector} from '@reduxjs/toolkit'

const createEntitySelector = (componentNames) => createSelector(
  componentNames.map((c) => state => state[c]),
  (...components) => {
    return components[0].reduce((acc, curr) => {
      let ent = {
        id: curr.id,
        [componentNames[0]]: {...curr}
      }
      for (let index = 1; index < components.length; index++) {
        const data = components[index].find(c => c.id === curr.id)
        if (data) {
          ent[componentNames[index]] = data
        } else  {
          return acc
        }
      }
      return [...acc, ent]
    }, [])
  }
)

export default createEntitySelector