const fs = require('fs');
const inquirer = require('inquirer');


const questions = [
    {
        type: "input",
        name: "manager_name",
        message: "Manager name:"
    },
    {
        type: "input",
        name: "manager_id",
        message: "Manager employee ID:",
    },
    {
        type: "input",
        name: "manager_email",
        message: "Manager email address:",
    },
    {
        type: "input",
        name: "manager_office",
        message: "Manager's office number:"
    },
    {
        type: "checkbox",
        name: "add_employee",
        message: "Please select which employee you want to add:",
        choices: [ "Engineer", "Intern"],
    },


    {
        type: "input",
        name: "engineer_name",
        message: "Engineer name:"
    },
    {
        type: "input",
        name: "engineer_id",
        message: "Engineer employee ID"
    },
    {
        type: "input",
        name: "engineer_email",
        message: "Engineer email address:"
    },
    {
        type: "input",
        name: "manager_github",
        message: "Engineer Github:"
    },
    {
        type: "checkbox",
        name: "add_employee",
        message: "Please select which employee you want to add:",
        choices: [ "Engineer", "Intern"],
    },


    {
        type: "input",
        name: "intern_name",
        message: "Intern name:"
    },
    {
        type: "input",
        name: "intern_id",
        message: "Intern employee ID",
    },
    {
        type: "input",
        name: "intern_email",
        message: "Intern email address:",
    },
    {
        type: "input",
        name: "intern_school",
        message: "Intern school:"
    },
];


function writeToFile(fileName, data){
    fs.writeFile
}