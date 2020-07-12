import {createSystem} from 'ecs'
import {delay} from 'data'

const advanceDelay = createSystem([[delay]], ([entities]) => (
  entities.map(e => ({...e, delay: {value: Math.max(0, e.delay.value - 1)}}))
))

export default advanceDelay