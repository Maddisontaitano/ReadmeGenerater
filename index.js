// Requiring modules needed
const fs = require("fs")
const inquirer= require("inquirer")
const util = require("util");
const generateMarkdown = require("./util/generateMarkdown.js");
const writeFileAsync = util.promisify(fs.writeFile);


// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your Project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a detailed description of your project and provide any steps necessary.",
  },
  {
    type: "input",
    name: "installation",
    message: "What should the user install to run this application? (any dependencies)?",
    default: "npm i",
  },
  {
    type: "input",
    name: "usage",
    message: "How would you like your application to be used?",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license.",
    choices: [
      {
        key: "mit",
        name: "MIT License",
        spdx_id: "MIT",
        url: "https://api.github.com/licenses/mit",
      },
      {
        key: "lgpl-3.0",
        name: "GNU Lesser General Public License v3.0",
        spdx_id: "LGPL-3.0",
        url: "https://api.github.com/licenses/lgpl-3.0",
      },
      {
        key: "mpl-2.0",
        name: "Mozilla Public License 2.0",
        spdx_id: "MPL-2.0",
        url: "https://api.github.com/licenses/mpl-2.0",
      },
      {
        key: "agpl-3.0",
        name: "GNU Affero General Public License v3.0",
        spdx_id: "AGPL-3.0",
        url: "https://api.github.com/licenses/agpl-3.0",
      },
      {
        key: "unlicense",
        name: "The Unlicense",
        spdx_id: "Unlicense",
        url: "https://api.github.com/licenses/unlicense",
      },
      {
        key: "apache-2.0",
        name: "Apache License 2.0",
        spdx_id: "Apache-2.0",
        url: "https://api.github.com/licenses/apache-2.0",
      },
      {
        key: "gpl-3.0",
        name: "GNU General Public License v3.0",
        spdx_id: "GPL-3.0",
        url: "https://api.github.com/licenses/gpl-3.0",
      },
    ],
  },
  {
    type: "input",
    name: "contribution",
    message: "Did anyone else contribute to this project? (provide github usernames)",
  },
  {
    type: "input",
    name: "tests",
    message: "What command is required to test this app?",
    default: "npm test",
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];


// function to write README file

inquirer.prompt(questions)
.then((data) => writeFileAsync("./outPut/SampleReadMe.md", generateMarkdown(data)))
.then(() => console.log("successfully wrote your readme!"))
.catch((err) =>console.log(err))


