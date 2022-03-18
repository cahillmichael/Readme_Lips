// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'None') {
    return ''
  } else if (license === 'MPL') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if (license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'None') {
    return ''
  } else if (license === 'MPL') {
    return `https://opensource.org/licenses/MPL-2.0`
  } else if (license === 'Apache') {
    return `https://opensource.org/licenses/Apache-2.0`
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None') {
    return ''
  } else if (license === 'MPL') {
    return `
    ## License
    ${renderLicenseLink(license)}

    This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
    `
  } else if (license === 'Apache') {
    return `
    ## License
    ${renderLicenseLink(license)}

    Copyright 2022

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}  
    ${renderLicenseBadge(data.license)}
  
  ## Description  
  ${data.description}  
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.install}  
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.test}
  
  ## Questions
  Contact me with any questions…
  
  on GitHub: <a href='https://github.com/${data.gitUsername}'>${data.gitUsername}</a><br>
  or by email:  <a href='mailto:${data.email}'>${data.email}</a>  
`;
}

module.exports = generateMarkdown;
