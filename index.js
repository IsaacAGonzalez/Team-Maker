const inquirer = require("inquirer");

const createManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Manager Name:",
        name: "name",
      },
      {
        type: "input",
        message: "Employee ID:",
        name: "employeeID",
      },
      {
        type: "input",
        message: "Email Address:",
        name: "emailAddress",
      },
      {
        type: "input",
        message: "Office Number:",
        name: "officeNumber",
      },
    ])
    .then((response) => appendDB(response));
};

const createEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Engineer Name:",
        name: "name",
      },
      {
        type: "input",
        message: "Employee ID:",
        name: "employeeID",
      },
      {
        type: "input",
        message: "Email Address:",
        name: "emailAddress",
      },
      {
        type: "input",
        message: "GitHub Username:",
        name: "githubUsername",
      },
    ])
    .then((response) => appendDB(response));
};

const createIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Intern Name:",
        name: "name",
      },
      {
        type: "input",
        message: "Employee ID:",
        name: "employeeID",
      },
      {
        type: "input",
        message: "Email Address:",
        name: "emailAddress",
      },
      {
        type: "input",
        message: "School:",
        name: "school",
      },
    ])
    .then((response) => appendDB(response));
};

const addMoreMembers = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Which team member do you want to add?",
        name: "choice",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then((response) => {
      if (response.choices == "Engineer") {
        createEngineer();
      } else {
        createIntern();
      }
    }).then(() => {
      inquirer
        .prompt([
          {
            type: "confirm",
            message: "Add more members?",
            name: "choice",
          },
        ])
        .then((response) => {
          if (response.choice) {
            addMoreMembers();
          }
        });
    });
};

const generateHTML = (database) => {

};

function main() {
  console.log("Welcome! Let's begin making your team.");
  console.log("Let's begin by adding a manager.");
  // createManager();
  inquirer
    .prompt([
      {
        type: "confirm",
        message: "Add more members?",
        name: "choice",
      },
    ])
    .then((response) => {
      if (response.choice) {
        addMoreMembers();
      }
      console.log("Team complete, generating HTML");
      generateHTML();
    });
}

main();