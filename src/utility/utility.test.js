import {mergeById} from './index'

test('mergeById updates components', () => {
  let state = [
    {id: 0, data1: 'old', data2: 'old'},
    {id: 2, data1: 'old', data2: 'old'},
    {id: 3, data1: 'old', data2: 'old'},
  ]
  let draft = [
    {id: 2, data1: 'new'},
  ]
  expect(mergeById(state, draft)).toEqual([
    {id: 0, data1: 'old', data2: 'old'},
    {id: 2, data1: 'new', data2: 'old'},
    {id: 3, data1: 'old', data2: 'old'},
  ])
})