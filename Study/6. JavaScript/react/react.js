let hooks = [];
let idx = 0;

export function useState(initVal) {
  const _idx = idx++;
  const state = hooks[_idx] || initVal;
  const setState = (newVal) => {
    hooks[_idx] = newVal;
  };
  return [state, setState];
}

export function render(Component) {
  idx = 0;
  const C = Component();
  C.render();
  return C;
}

export function useEffect(cb, depArray) {
  const oldDeps = hooks[idx];
  let hasChanged = true;

  if (oldDeps instanceof Array) {
    hasChanged = oldDeps.some((oldEl, idx) => !Object.is(oldEl, depArray[idx]));
  }

  if (hasChanged) cb();

  hooks[idx] = depArray;
  idx++;
}
