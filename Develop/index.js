// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter your project title.",
  },
  {
    type: "input",
    name: "description",
    message: "Enter your project description.",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter your project installation instructions.",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter your project usage information.",
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter your project contribution guidelines.",
  },
  {
    type: "input",
    name: "testIntructions",
    message: "Enter your project test instructions.",
  },
  {
    type: "list",
    name: "license",
    message: "Select your project's license",
    choices: ["None", "Apache 2.0 License", "ISC License (ISC)"],
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email.",
  },
];

// Function that writes README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created README.md!")
  );
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile("README.md", readmeContent);
  });
}

// Function call to initialize app
init();
