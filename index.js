const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./utils/Employee");
const Intern = require("./utils/Intern");
const Engineer = require("./utils/Engineer");
const Manager = require("./utils/Manager");
// const generateHTML = require('./generateHTML.js')

const teamArr = [];

function init() {
  function buildManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "Manager name:",
        },
        {
          type: "input",
          name: "managerId",
          message: "Manager employee ID:",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "Manager email address:",
        },
        {
          type: "input",
          name: "managerOfficeNum",
          message: "Manager's office number:",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNum
        );

        teamArr.push(manager);

        buildTeam();

      });
  }

  const questions = [

    {
      type: "checkbox",
      name: "addEmployee",
      message: "Please select which employee you want to add:",
      choices: ["Engineer", "Intern"],
    },

    {
      type: "input",
      name: "internName",
      message: "Intern name:",
    },
    {
      type: "input",
      name: "internId",
      message: "Intern employee ID",
    },
    {
      type: "input",
      name: "internEmail",
      message: "Intern email address:",
    },
    {
      type: "input",
      name: "internSchool",
      message: "Intern school:",
    },
  ];

  function buildTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "addEmployee",
          message: "Please select which employee you want to add:",
          choices: ["Engineer", "Intern", "Create Team"],
        },
      ])
      .then((answers) => {
        switch (answers.addEmployee) {
          case "Engineer":
            buildEngineer();
            break;
          case "Intern":
            buildIntern();
            break;
          default:
            createTeam();
        }
      });
  }

  function buildEngineer() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Engineer name:",
          },
          {
            type: "input",
            name: "engineerId",
            message: "Engineer employee ID",
          },
          {
            type: "input",
            name: "engineerEmail",
            message: "Engineer email address:",
          },
          {
            type: "input",
            name: "engineerGithub",
            message: "Engineer Github:",
          }
    ])
    .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerOfficeNum
        );

        teamArr.push(engineer);

        buildTeam();

      });
  }


  function createTeam() {
    fs.writeFile();
  }

  // function writeToFile(fileName, data) {
  //     fs.writeFile(fileName, data, (err) => {
  //         err?console.error(err):console.log("Thank you!")
  //     })
  // }

  buildManager();
}

init();
