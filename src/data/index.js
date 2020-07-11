import {createComponent} from 'ecs'

export const warrior = createComponent('warrior')
export const scene = createComponent('scene')
export const camera = createComponent('camera')
export const position = createComponent('position', {value: 0})
export const active = createComponent('active', {value: false})
export const size = createComponent('size', {value: 1})
export const movement = createComponent('movement', {dx: 0})
export const collision = createComponent('collision', {intersections: [], bumps: []})
export const solid = createComponent('solid')
