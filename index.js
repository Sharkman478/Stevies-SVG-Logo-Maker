const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');
const questions = [
    {
        type: 'list',
        name: 'color',
        message: 'Enter color for the logo:',
        choices: ['Blue', 'Red', 'Green'],
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Enter shape for the logo:',
        choices: ['Triangle', 'Circle', 'Square'],
      },
      {
        type: 'input',
        name: 'text',
        message: 'Enter text for the logo (maximum of 3 characters):',
      },
      {
        type: 'list',
        name: 'text-color',
        message: 'Enter text color for the logo (name of color or hexadecimal):',
      }
];
function writeToFile(filename, answers) {
    fs.writeFile(filename, answers, err=> {
      if (err) {
        console.error(err);
      } else {
        console.log("File written successfully");
      }
    })
};
function init() {
    inquirer
      .prompt (questions)
      .then ((answers) => {
        writeToFile('./dist/logo.svg', shapes(answers));
      })
      .catch((error) => {
        if (error.isTtyError) {
          console.error("Prompt couldn't be rendered in the current environment");
        } else {
          console.error("Something else went wrong", error);
        }
      })
  };

  init();