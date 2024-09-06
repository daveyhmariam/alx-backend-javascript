const getListStudentIds = (arg) => {
  if (!Array.isArray(arg)) {
    return [];
  }
  return arg.map((element) => element.id);
};
export default getListStudentIds;
