export const weakMap = new WeakMap();

export function queryAPI(arg) {
  let called = 0;
  if (weakMap.get(arg)) called = weakMap.get(arg);
  weakMap.set(arg, called + 1);
  if (called + 1 >= 5) throw new Error('Endpoint load is high');
};

export default queryAPI;
