const cleanSet = (set, start) => {
  if (start === undefined || start.length === 0) {
    return '';
  }
  return [...set]
    .filter((elem) => (elem !== undefined ? elem.startsWith(start) : ''))
    .map((elem) => (elem !== undefined ? elem.slice(start.length) : '')).join('-');
};

export default cleanSet;
