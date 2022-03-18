// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const Choices = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const questions = [

//project title
    {
        type: "input",
        name: "title",
        message: "What do you call this here project?",
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log("A Project Title is required.");
                return false;
            }
        }
    },
//description
    {
        type: "input",
        name: "description",
        message: "Describe the project.",
        validate: describeInput => {
            if(describeInput) {
                return true;
            } else {
                console.log("You must describe your project.");
                return false;
            }
        }
    },
//installation instructions
    {
        type: "input",
        name: "install",
        message: "How does one install the application?",
        validate: installInput => {
            if(installInput) {
                return true;
            } else {
                console.log("Providing installation instructions is compulsory.");
                return false;
            }
        }
    },
//usage information
    {
        type: "input",
        name: "usage",
        message: "How is your application used?",
        validate: usageInput => {
            if(usageInput) {
                return true;
            } else {
                console.log("Tell us how to use it!");
                return false;
            }
        }
    },
//licenses
    {
        type: "list",
        name: "license",
        message: "Select a license from the list.",
        choices: ['MPL', 'Apache', 'None'],
    },
//contribution guidelines
    {
        type: "input",
        name: "contribution",
        message: "How can others contribute?",
        validate: contributeInput => {
            if(describeInput) {
                return true;
            } else {
                console.log("Tell us how we can help.");
                return false;
            }
        }
    },
//test instructions
    {
        type: "input",
        name: "test",
        message: "How does one test the application?",
        validate: testInput => {
            if(testInput) {
                return true;
            } else {
                console.log("We need to know how to test this thing.");
                return false;
            }
        }
    },
//git username
        {
        type: "input",
        name: "gitUsername",
        message: "What is your GitHub username?",
        validate: usernameInput => {
            if(usernameInput) {
                return true;
            } else {
                console.log("Show us some ID!");
                return false;
            }
        }
    },
//email
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log("We need ot know how to reach you.");
                return false;
            }
        }
    },
];


// TODO: Create a function to write README file
function writeToFile(genContent) {
    return new Promise((resolve, reject) => {
        fs.writeFile("genREADME.md", genContent, err =>{
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'ReadMe Created'
            })
        })
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
