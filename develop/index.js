function init() {

    // Initializes the inquirer
    const inquirer = require('inquirer');

// array of questions for user
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
        name: "tableOfContents",
        message: "What should be included in the Table of Contents?"
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
        name: "Contributing",
        message: "If you created an application or package and would like other developers to contribute it, you will want to add guidelines here."
    },
    {
        type: "input",
        name: "Testing",
        message: "What type of testing did you do?"
    },
];



inquirer.prompt(questions)
        .then(answers => {

            let fileName = `${answers.Title}.md`;
            console.log(answers)
            console.log(fileName)
            const generateMarkdown = require('./utils/generateMarkdown.js');

            // Generate markdown from the users answers
            const markdown = generateMarkdown(answers);

            writeToFile(fileName, markdown);
        })
        .catch(error => {
            if (error.isTtyError) {

            } else {
    
            }
        });

}

function writeToFile(fileName, data) {
    const fs = require('fs');

    fs.writeFile(fileName, data, (err) => {
        // If there is error writing to the file, return
        if (err) {
            console.error(err)
            return
        }

        console.log('Wrote README file successfully')
    })

}

init();