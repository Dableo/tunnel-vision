export const createGameInputUpdate = (store, systems=[]) => {
  const runSystems = (args) => {
    systems.forEach(s => {s.execute(store, args)})
  }
  const onDown = event => runSystems({key: event.code})
  return {
    start: () => {
      window.addEventListener('keydown', onDown)
    },
    stop: () => {
      window.removeEventListener('keydown', onDown)
    }
  }
}
export default createGameInputUpdate