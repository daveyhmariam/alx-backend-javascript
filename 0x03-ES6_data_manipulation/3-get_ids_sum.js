const getStudentIdsSum = (arg) => {
  const res = arg.reduce((res, stu) => res + stu.id, 0);
  return res;
};

export default getStudentIdsSum;
