const inquirer = require("inquirer")
const fs = require('fs')


// array of questions
const questions =()=> {
    inquirer.prompt
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
    type: "list",
    message: "What is the license for this project?",
    name: "License",
    choices: [
        "MIT",
        "APACHE",
        "GPL",
        "None"
    ]

}]
}