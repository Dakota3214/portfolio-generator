const fs = require("fs");
const generatePage = require("./src/page-template.js");
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// Short hand to write above statement
const profileDataArgs = process.argv.slice(2);
console.log(profileDataArgs);


// const names = profileDataArgs[0];
// const github = profileDataArgs[1];
// short version of code above
const [names, github] = profileDataArgs;


// ONE WAY TO WRITE THIS FUNCTION WITH ARROW 
// const printProfileData = (profileDataArr) => {
//     console.log(profileDataArr);
// };

// const printProfileData = profileDataArr => {
//     // This....
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }

// console.log("==================");

//     // Is the same as this.....
//     profileDataArr.forEach((profileItem) => {
//         console.log(profileItem);
//     });

//     console.log("===================");

//         // can also be cleaned to look like this
//         profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

fs.writeFile("index.html", generatePage(names, github), err => {
    if (err) throw err;
    console.log("portfolio complete! Check out index.html to see the output!")
});

//     console.log(names, github);
// console.log(generatePage(names, github));
