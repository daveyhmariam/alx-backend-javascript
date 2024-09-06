const getStudentsByLocation  = (arr, city) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.filter((ele) => ele.location === city);
}
export default getStudentsByLocation;