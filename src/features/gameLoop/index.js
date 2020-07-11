export const createGameStep = (store, timeout, systems=[]) => {
  const runSystems = () => {
    systems.forEach(s => {s.execute(store)})
  }
  let timerId;
  return {
    start: () => {timerId = setInterval(runSystems, timeout)},
    stop: () => {clearTimeout(timerId)}
  }
}