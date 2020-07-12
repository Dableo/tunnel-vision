export const createInitialize = (store, systems=[], systemArgs={}) => {
  return {
    start: () => {systems.forEach(s => {s.execute(store, systemArgs)})}
  }
}

export const createGameStep = (store, timeout, systems=[]) => {
  let step = 0
  const runSystems = () => {
    systems.forEach(s => {s.execute(store, {step})})
    step++
  }
  let timerId;
  return {
    start: () => {timerId = setInterval(runSystems, timeout)},
    stop: () => {clearTimeout(timerId)}
  }
}