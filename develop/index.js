function init() {

// Initializes the inquirer
const inquirer = require('inquirer');

//Array of qeustions the user has to answer to populate the readme
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "Description",
        message: "Describe the purpose of your project."
    },
    {
        type: "input",
        name: "Installation",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
    },
    {
        type: "input",
        name: "Usage",
        message: "Provide instructions and examples for use."
    },
    {
        type: "input",
        name: "Credits",
        message: "List your collaborators, any third parts assests, or any tutorials used to create the project."
    },
    {
        type: "list",
        name: "license",
        message: "Does the application have or require a license?",
        choices: ["MIT", "Apache 2.0", "GPL v3", "None"]
    },
    {
        type: "input",
        name: "Contributors",
        message: "If you created an application or package and would like other developers to contribute it, you will want to add guidelines here."
    },
    {
        type: "input",
        name: "Testing",
        message: "What type of testing did you do?"
    },
];

//init function will start the process
inquirer.prompt(questions)
        .then(answers => {
//the name of the file will be what the user proces as title. It will be a markdown file.
            let fileName = `${answers.Title}.md`;
            console.log(answers)
            console.log(fileName)
            //require the markdown js file
            const generateMarkdown = require('./utils/markdown.js');
            //use the users answers to generate the file
            const markdown = generateMarkdown(answers);
            //write the file
            writeToFile(fileName, markdown);
        })
        //fucntion to catch if there is an error
        .catch(error => {
            if (error.isTtyError) {
            } else {
            }
        });
}

//function to write the file
function writeToFile(fileName, data) {
    //require file system
    const fs = require('fs');
    fs.writeFile(fileName, data, (err) => {
        // Return the error if there is one
        if (err) {
            console.error(err)
            return
        }
        console.log('succes')
    })

}

//call the function
init();