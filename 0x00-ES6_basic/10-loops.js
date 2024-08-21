export default function appendToEachArrayValue(array, appendString) {
  let index = 0;
  for (const value of array) {
    index  = array.indexOf(value)
    array[index] = appendString + value;
  }
  return array;
  }
