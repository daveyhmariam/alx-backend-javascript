const updateStudentGradeByCity = (students, city, newGrades) => {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  const result = students.filter((student) => student.location === city).map((student) => {
    const item = newGrades.find((newStudent) => student.id === newStudent.studentId);
    return { ...student, grade: item ? item.grade : 'N/A' };
  });
  return result;
};

export default updateStudentGradeByCity;
