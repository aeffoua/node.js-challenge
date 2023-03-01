const licenses= require('../licenses.json');

module.exports = [

    {
        type: 'input',
        name: 'title',
        message: 'enter a title for your project:',


    },
    {
        type: 'input',
        name: 'description',
        message: 'describe your project:',


    },
    {
        type: 'input',
        name: 'installation',
        message: 'what are the steps required to install?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'provide instructions and examples for use',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'how to contribute',
    },
    {
        type: 'input',
        name: 'test',
        message: 'write test for your application:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'pick your license',
        choices: getLicenses(licenses.licenses)
    },
    {
        type: 'input',
        name: 'questions',
        message: 'enter questions:',
    },
];

function getLicenses(licenses){
    const allLicenses= [] 
    for(let licence of licenses){
     allLicenses.push({key:licence.name,value:licence.licenseId})
    }
    return allLicenses
 }
 
