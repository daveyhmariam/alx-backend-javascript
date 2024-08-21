export default function createIteratorObject(report) {
  const array = [];
  Object.keys(report.allEmployees).forEach(key => {
    array.push(...report.allEmployees[key]);
  });
  return array[Symbol.iterator]();
}
