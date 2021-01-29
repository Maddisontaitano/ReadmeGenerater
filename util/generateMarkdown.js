function generateMarkdown(data) {

    const badges = {
        "MIT License": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        "GNU Lesser General Public License v3.0": "[![License: LGPL 3.0](https://img.shields.io/badge/License-LGPL%203.0-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
        "Mozilla Public License 2.0": "[![License: MPL v2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0.html)",
        "GNU Affero General Public License v3.0": "[![License: AGPL v3.0](https://img.shields.io/badge/License-AGPL%20v3-red.svg)](https://www.opensource.org/licenses/AGPL-3.0)",
        "The Unlicense": "[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)](http://unlicense.org/)",
        "Apache License 2.0": "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-orange.svg)](https://www.opensource.org/licenses/Apache-2.0)",
        "GNU General Public License v3.0": "[![License: GPL v3.0](https://img.shields.io/badge/License-GPLv3-pink.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    };


    return `
    # ${data.title}
    ${badges[data.license]}

        ${data.description}
    

    ## Table Of Contents

    *[Installation](#installation) 
    *[usage](#usage)
    *[license](#license)
    *[contribution](#contribution)
    *[tests](#tests)
    *[questions](#questions)


    ## Installation
    you must install the following packages for the ReadMe to be generated

    ${data.installation}
   
    
    ## Usage
    Please go through the following steps to run this application 
    ${data.usage}


    ## Contributors
    ${data.contribution}

    ## Tests
    the following is required to run the test:
    ${data.tests}

    ## Questions
    For any follow up questions, plese feel free to contact me at my GitHub page: [GitHub Profile](https://github.com/${data.username}/${data.title}).
    
    ## License
    [MIT](https://choosealicense.com/licenses/mit/)
`
};

module.exports = generateMarkdown;