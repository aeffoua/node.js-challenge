// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const allLicenses= [] 
   for(let licence of licenses){
    allLicenses.push({key:licence.name,value:licence.licenseId})
   }
   return allLicenses
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation,usage, contributing, license}) {
  return `# <Your-Project-Title ${title}>
![License](https://img.shields.io/badge/${license}-blue.svg)

## Description
 ${description}
 ## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
 ${installation}
## Usage 
## Credits
## License 
The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---
## Badges
![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

## Features
## How to Contribute

## Tests
`;
}

module.exports = generateMarkdown;

