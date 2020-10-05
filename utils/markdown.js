// function to generate markdown for README
function generateMarkdown(data) {

//List for the tables of contents
  let tableOfContents = "";
  if (data.tableOfContents) {
    tableOfContents =
      `## Table of Contents
    
    * [Title](#Title)
    * [Description](#Description)
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [Credits](#Credits)
    * [License](#License)
    * [Contributing](#Contributing) 
    * [Testing](#Testing)`
  }

//img for the license
  if (data.license === 'MIT') {
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  
  } else if (data.license === 'Apache 2.0') {
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  
  } else if (data.license === 'GPL v3') {
    licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)"
  
  } else if (data.license === 'None') {
    licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  }
//grab the user response
  return `
  # ${data.Title}
  ## Description
  ${data.Description}
  ${tableOfContents}
  ## Installation
  ${data.Installation}
  ## Usage
  ${data.Usage}
  ## License
  ${licenseBadge}
  ## Contributors
  ${data.Contributors}
  ## Testing
  ${data.Testing}
  ## Questions
  ${data.Questions}`;
}
//export the responses
module.exports = generateMarkdown;