const inquirer = require("inquirer")
const fs = require('fs')

const generateMardown = require("./utils/generateMarkdown")
// array of questions
const questions = () => {

    return inquirer.prompt(
    [{
        type: "input",
        message: "What is the title of the project?",
        name: "Title"

    }, {
        type: "input",
        message: " Give a detailed description of your project.",
        name: "Description"

    }, {
        type: "input",
        message: "Table of Contents",
        name: "Table of Contents"

    }, {
        type: "input",
        message: "What instructions should users follow to install your aplication?",
        name: "Installation"

    }, {
        type: "input",
        message: "How do you use this aplication?",
        name: "Usage"

    }, {
        type: "input",
        message: "Do you have any collaborators?",
        name: "Credits"


    },{ 
        type: "input",
        message: "Github username:",
        name: "Git",


    },{ 
        type: "input",
        message: "Email::",
        name: "Email",


    },{ 
        type: "input",
        message: "What commands do you need to run this app?",
        name: "Tests",


    },{ 
        type: "input",
        message: "How would you like to contribute?",
        name: "Contribute",

    },
    
    {
            type: "list",
            message: "What is the license for this project?",
            name: "License",
            choices: [
                "MIT",
                "APACHE",
                "IBM",
                "None"
            ]

        }])

      

        .then(data =>{
            fs.writeFileSync("./README.md",generateMardown(data))
        })
}

questions ()