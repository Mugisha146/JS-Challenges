function formatPeopleArray(arr) {
    const result = {
        females: [],
        males: []
    };

    for (let i = 0; i < arr.length; i++) {
        const person = arr[i];
        const personParts = person.split(',');
        const fullName = personParts[0].trim();
        const age = parseInt(personParts[1].trim());
        const gender = personParts[2].trim();

        const nameParts = fullName.split(' ');
        const firstName = nameParts[0];
        const secondName = nameParts[1];

     const personInfo = {
       "first-name": firstName,
       "second-name": secondName,
       "age": age,
     };

        if (gender === 'female') {
            result.females.push({ [firstName]: personInfo });
        } else if (gender === 'male') {
            result.males.push({ [firstName]: personInfo });
        }
    }

    return result;
}

const peopleArray = [
    "Patrick wyne, 30, male",
    "lil wyne, 32, male",
    "Eric mimi, 21, female",
    "Dodos deck, 21, male",
    "Alian Dwine, 22, male",
    "Patrick wyne, 33, male",
    "Patrick wyne, 10, male",
    "Patrick wyne, 40, male"
];

const formattedData = formatPeopleArray(peopleArray);
console.log(formattedData);
/* output: {
  females: [ { Eric: [Object] } ],
  males: [
    { Patrick: [Object] },
    { lil: [Object] },
    { Dodos: [Object] },
    { Alian: [Object] },
    { Patrick: [Object] },
    { Patrick: [Object] },
    { Patrick: [Object] }
  ]
}*/ 