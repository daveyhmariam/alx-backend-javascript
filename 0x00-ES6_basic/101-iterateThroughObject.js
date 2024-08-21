export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  let isFirst = true;

  for (const element of reportWithIterator) {
    if (!isFirst) {
      str += ` | ${element}`;
    } else {
      str += `${element}`;
      isFirst = false;
    }
  }

  return str;
}
