const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    }
  ])
  .then(answers => console.log(answers));
// const fs = require("fs");
// const generatePage = require("./src/page-template.js");

// const pageHTML = generatePage(names, github);

// fs.writeFile("index.html", pageHTML, err => {
//   if (err) throw err;
//   console.log("portfolio complete! Check out index.html to see the output!")
// });







// const profileDataArgs = process.argv.slice(2, process.argv.length);
// Short hand to write above statement
// const profileDataArgs = process.argv.slice(2);
// console.log(profileDataArgs);
// We no longer need process.argv statement to load inquirer because we installed npm inquirer


// const names = profileDataArgs[0];
// const github = profileDataArgs[1];
// short version of code above
// const [names, github] = profileDataArgs;


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


//     console.log(names, github);
// console.log(generatePage(names, github));
