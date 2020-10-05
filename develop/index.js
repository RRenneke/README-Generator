const fs = require("fs");
const inquirer = require("inquirer");



// Questions for users
const questions = [
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        },
        {
            type: "input",
            message: "What is your Github user name?",
            name: "github_username",
        },
        {
            type: "input",
            message: "Describe your project.",
            name: "description",
        },
        {
            type: "input",
            message: "What steps are required to install your project?",
            name: "install_steps",
        },
        {
            type: "input",
            message: "Provide instructions and examples for use.",
            name: "usage",
        },
        {
            type: "input",
            message: "List your collaborators, third-party assets, and any tutorials used.",
            name: "collaborators",
        },
        {
            type: "list",
            message: "Choose your license.",
            name: "licenses",
            choices:['MIT', 'GPL v3', 'AGPL', 'None']
        },

    ];
 
    // Function to write file
    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => {
            if(err) {
                throw err;
            }
            console.log('success')
        });
    }

    // Function to initialize program
    function init() {
        inquirer.prompt(questions).then((answers) => {

            const response = markdown(answers);
            console.log(answers);

            writeToFile('README.md', response);
        })
    }

    init();