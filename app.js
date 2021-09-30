const inquirer = require("inquirer");

const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your name!");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "github",
        message: "Enter your Github username:",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your github username!");
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to enter some information about yourself for an "About" section?',
        default: true
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:',
        when: ({ confirmAbout }) => {
          if (confirmAbout) {
            return true;
          } else {
            return false;
          }
        }
      },
    ])
};

const promptProject = portfolioData => {
  

  // If there's no "projects" array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }


  console.log(`
  =================
  Add a New Project 
  =================
  `);
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your project?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your project's name!");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description pf the project (Required):",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your projects description!");
          return false;
        }
      }
    },
    {
      type: "checkbox",
      name: "languages",
      message: "What did you build this project with? (Check all that apply)",
      choices: ["JavaScript", "HTML", "CSS", "ES6", "jQuery", "Bootstrap", "Node"],
    },
    {
      type: "input",
      name: "link",
      message: "Enter the Github link to your project. (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your projects link!");
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
    
  ])
  .then(projectData => {
    portfolioData.projects.push(projectData);

    if (projectData.confirmAddProject) {
      return promptProject(portfolioData);
    } else {
      return portfolioData;
    }

  })
};


promptUser()
  // .then(answers => console.log(answers))
  .then(promptProject)
  // .then(projectAnswers => console.log(projectAnswers))
  .then(portfolioData => {
    console.log(portfolioData);
  });



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
