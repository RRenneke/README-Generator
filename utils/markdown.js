// function to generate markdown for README
function generateFile(answers) {

//List for the tables of contents
  let tableOfContents = "";
  if (answers.tableOfContents) {
    tableOfContents =
      `## Table of Contents
    - [Title](#Title)
    - [Description](#Description)
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [Credits](#Credits)
    - [License](#License)
    - [Contributors](#Contributors) 
    - [Testing](#Testing)`
  }

//img for the license
  if (answers.license === 'MIT') {
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  
  } else if (answers.license === 'Apache 2.0') {
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  
  } else if (answers.license === 'GPL v3') {
    licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)"
  
  } else if (answers.license === 'None') {
    licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  }
//grab the user response
  return `
  ## Description:
    ${answers.Description}
  ## Installation
    ${answers.Installation}
  ## Usage
    ${answers.Usage}
  ## Credits
    ${answers.Credits}
  ## License
    ${licenseBadge}
  ## Contributors
    ${answers.Contributors}
  ## Testing
    ${answers.Testing}`;
}
//export the responses
module.exports = generateFile