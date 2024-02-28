setStudentAgeApi = (student, age) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (age < 0) {
        reject("Bad Age");
      } else {
        student.age = age;
        resolve(student);
      }
    }, 500);
  });
};

// Example usage with positive age
let student = { name: "Eric" };
setStudentAgeApi(student, 20)
  .then((updatedStudent) => {
    console.log(updatedStudent);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Example usage with negative age
student = { name: "Eric" }; 
setStudentAgeApi(student, -5)
  .then((updatedStudent) => {
    console.log(updatedStudent);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
