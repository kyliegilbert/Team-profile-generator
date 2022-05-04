const inquirer = require('inquirer');
const fs = require('fs');


const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { validate } = require('@babel/types');

const Team = [];

const commonQuestions = [

    {
        type: 'input',
        name: 'name',
        message: 'Enter name of team member',
        validate: Info => {
            if (!Info) {
                console.log('Please list a name.')
                return (false);
            } else {
                return (true);
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter their id number",
        validate: Info => {
            if (isNaN(Info)) {
                console.log('Please enter a number.');
                return (false);
            } else {
                return (true);
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter their email address.",
        validate: function (email) {

            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            
        }
    },
]

const addManager = () => {
   console.log ('____ Adding a manager! ____')
    return inquirer.prompt([
        ...commonQuestions,
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number.",
            validate: Info => !isNaN(Info)

        }
    ])
        .then((info) => {
            console.log(info)
            const newManager = new Manager (info.name, info.id, info.email, info.officeNumber)
            console.log(newManager)

            Team.push(newManager)
            // console.log(Team)
        })



}
const addEngineer = () => {
    return inquirer.prompt([
    ...commonQuestions,
    {
        type:'input',
        name: 'gitHubUsername',
        message: 'Enter github username.',
        validate: Info => {
            if (!Info) {
                console.log('Please list a manager.')
                return false;
            } else {
                return true;
            }
        }
    }
    ])
    .then((answers) => {
        console.log(answers);
        
        const newEngineer = new Engineer (answers.name, answers.id, answers.email, answers.gitHubUsername);

        Team.push(newEngineer)
        //     console.log(newEngineer)

    })

}

const addIntern = () => {

    return inquirer.prompt([
        ...commonQuestions,
        {
            type:'input',
            name: 'school',
            message: 'Enter School information',
            validate: Info => {
                if (!Info) {
                    console.log('Please list a school.')
                    return false;
                } else {
                    return true;
                }
            }
        }
        ])
        .then((answers) => {
            console.log(answers);
            const newIntern = new Intern (answers.name, answers.id, answers.email, answers.school);

            Team.push(newIntern)
            // console.log(newIntern)
    
        })
}

const addTeamMember = () => {
    console.log ('____ Adding a Team Member! ____')

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "choose employee's role",
            choice: ['Engineer', 'Intern']
        }
    ])
    .then(employeeType => {
        if(employeeType.role === 'Engineer') {
            const engineer = addEngineer();

        }else if(employeeType.role === 'Intern'){
            const intern = addIntern();

        }else {
            return
        }
    })
}

const teamMember = () => {
    
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'choice',
            message: "Would you like to add another employee",
            default: false
        }

    ])
    .then(answer => {
        console.log(answer)
        if(answer.choice === true) {
            console.log ('True')
            const newTeamMember = addTeamMember()

        }else {
            return console.log ('False')
        }
    })
    


 }

addManager()
 //.then(addTeamMember)
 .then(teamMember)

