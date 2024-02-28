function processFamilies(families) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      families.forEach((family) => {
        const totalMembers = 2 + family.childrenNumber; 
        family.totalNumberofFamilyMembers = totalMembers;
        if (family.fatherName && family.fatherName.toLowerCase() === "yves") {
          reject(new Error("Yves is not an allowed dad in 2022"));
        }
      });
      resolve(families);
    }, 1000);
  });
}

const families = [
  { fatherName: "John", motherName: "Mary", childrenNumber: 2 },
  { fatherName: "Yves", motherName: "Anne", childrenNumber: 1 },
];

(async () => {
  try {
    const updatedFamilies = await processFamilies(families);
    console.log(updatedFamilies);
  } catch (error) {
    console.error("Error:", error.message);
  }
})();
