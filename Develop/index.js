// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const questions= require('./question.js');
const generateMarkdown = require('./utils/generateMarkdown.js');



// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
function writeToFile(filename, data) {
   fs.writeFile(filename, data, (error) =>
    error ? console.log(error) : console.log('Successfully created README.md!')
  );
}

// TODO: Create a function to initialize app
async function init() {
   let responses = await getUserInput(questions)
   let readmeData = generateMarkdown(responses)
   writeToFile('README.md', readmeData)
   
}

// Function call to initialize app
init();

async function getUserInput (questions) {

   let prompt = inquirer.createPromptModule()
let responses= await prompt(questions)
return responses
}

