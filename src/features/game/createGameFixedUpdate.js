export const createGameFixedUpdate = (store, systems=[]) => {
  let step = 0
  const runSystems = () => {
    systems.forEach(s => {s.execute(store, {step})})
    step++
  }
  let timerId;
  return {
    start: (timeout) => {timerId = setInterval(() => {runSystems()}, timeout)},
    stop: () => {clearTimeout(timerId)}
  }
}
export default createGameFixedUpdate