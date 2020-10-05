// function to generate markdown for README
function generateMarkdown(data) {


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

  const issuesBadge = `[![GitHub issues](https://img.shields.io/github/issues/${data.userName}/${data.Title})](https://github.com/${data.userName}/${data.title}/issues)`;


  let licenseBadge;
  const profileImage = `![${data.userName}](https://github.com/${data.userName}.png?size=200)`;

  if (data.license === 'MIT') {
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  
  } else if (data.license === 'Apache 2.0') {
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  
  } else if (data.license === 'GPL v3') {
    licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)"
  
  } else if (data.license === 'None') {
    licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  }

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
  ${data.Questions}
  
`;
}

module.exports = generateMarkdown;