const fs = require("fs");
const inquirer = require("inquirer");

const Intern = require("./utils/Intern");
const Engineer = require("./utils/Engineer");
const Manager = require("./utils/Manager");
const generateHTML = require('./generateHTML.js')

const teamArr = [];

function init() {
  function addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "Please enter the manager's name:",
        },
        {
          type: "input",
          name: "managerId",
          message: "Please enter the manager's employee ID:",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "Please enter the manager's email address:",
        },
        {
          type: "input",
          name: "managerOfficeNum",
          message: "Please enter the manager's office number:",
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

        addEmployee();
      });
  };

  function addEmployee() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "addEmployee",
          message: "Please select which employee to add next or create your team:",
          choices: ["Engineer", "Intern", "Create Team"],
        },
      ])
      .then((answers) => {
        switch (answers.addEmployee) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            createTeam();
        }
      });
  };

  function addEngineer() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Please enter the engineer's name:",
          },
          {
            type: "input",
            name: "engineerId",
            message: "Please enter the engineer's employee ID:",
          },
          {
            type: "input",
            name: "engineerEmail",
            message: "Please enter the engineer's address:",
          },
          {
            type: "input",
            name: "engineerGithub",
            message: "Please enter the engineer's Github username:",
          }
    ])
    .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );

        teamArr.push(engineer);

        addEmployee();

      });
  }

  function addIntern() {
    inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "Please enter the intern's name:",
      },
      {
        type: "input",
        name: "internId",
        message: "Please enter the intern's employee ID:",
      },
      {
        type: "input",
        name: "internEmail",
        message: "Please enter the intern's email address:",
      },
      {
        type: "input",
        name: "internSchool",
        message: "Please enter the intern's school:",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );

      teamArr.push(intern);

      addEmployee()
    })
  }

  function createTeam() {
    const htmlPage = generateHTML(teamArr)

    fs.writeFile("./index.html", htmlPage, (err) => {
      err?console.error(err):console.log("Your team has been created! Please open your index.html file in a browser.")
      
    })
  };
  addManager()

}
init()
