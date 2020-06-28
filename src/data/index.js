import {createComponent} from 'ecs'

export const position = createComponent('position', {x: 0})
export const movement = createComponent('movement', {dx: 0})
export const collision = createComponent('collision', {intersections: [], bumps: []})
export const solid = createComponent('solid')
