function gradingStudents(grades) {
  let roudedGrades = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 40) {
      roudedGrades[i] = grades[i];
    } else if (Math.ceil(grades[i] / 5) * 5 - grades[i] < 3) {
      roudedGrades[i] = Math.ceil(grades[i] / 5) * 5;
    } else {
      roudedGrades[i] = grades[i];
    }
  }
  return roudedGrades;
}

console.log(gradingStudents([29, 50, 55, 100, 91]));
