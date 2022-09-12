// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
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
    name: "contribution",
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
    choices: [
      "Apache 2.0 License",
      "Boost Software License 1.0",
      "BSD 3-Clause License",
      "Eclipse Public License 1.0",
      "GNU GPL v3",
      "The Hippocratic License 2.1",
      "IBM Public License Version 1.0",
      "ISC License (ISC)",
    ],
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

// TODO: Create a function to write README file
const writeToFile = ({
  title,
  badge,
  description,
  installation,
  usage,
  contribution,
  testInstructions,
  license,
  github,
  email,
}) => `
# ${title}

${badge}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Contributing
${contribution}

## Tests
${testInstructions}

## License
${license}

## Questions

GitHub profile: github.com/${github}

If you have any additional questions, please reach out to me at ${email}.
`;

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = writeToFile(answers);

    fs.writeFile("README.md", readmeContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README.md!")
    );
  });
}

// Function call to initialize app
init();
