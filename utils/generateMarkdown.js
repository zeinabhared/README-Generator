// Function that returns a license badge based on which license is passed in
// If there is no license, it returns an empty string
function renderLicenseBadge(license) { 
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }
};

// Function that returns the license link
// If there is no license, it returns an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
  return `
  [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
};

// Function that returns the license section of README
// If there is no license, it returns an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
  return `
  ## [License](#table-of-contents)
  The application is covered under the following license:
  ${renderLicenseLink(license)}
    `;
  } else {
    return ' ';
  }
 };

// Function to generate markdown for README
function generateMarkdown(data) {
return ` 
# ${data.title}

${renderLicenseBadge(data.license)}
## Table-of-Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## [Description](#table-of-contents)
${data.description}

## [Installation](#table-of-contents)
${data.installation}

## [Usage](#table-of-contents)
${data.usage}

## [Contributing](#table-of-contents)
${data.contribute}

## [Tests](#table-of-contents)
${data.test}

## [Questions](#table-of-contents)
Please contact me using the following links:

[GitHub: https://github.com/${data.githubUsername}

[Email: ${data.email}](mailto:${data.email})
`
};

module.exports = generateMarkdown;
