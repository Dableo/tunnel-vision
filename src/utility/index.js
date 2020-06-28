export function inRange(x, min, max) {
  return ((x-min)*(x-max) <= 0);
}

export function mergeById(a1, a2) {
  return a1.map(itm => ({
    ...itm,
    ...a2.find((item) => (item.id === itm.id))
  }));
}
