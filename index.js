//requirements
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const html = require('./src/htmlTemp');

//asynchronous functions
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let teamString = '';

console.clear();
console.log('---------------');
console.log('A Team Profile Generator by sneuensc1');

//Other functions
async function primary () {
    try {
        await prompt ()

        for (let i = 0; i < teamArray; i++) {
            teamString = teamString + html.generateCard (teamArray[i]);
        }
        let completeHtml = html.generateHTML(teamString);

        console.clear();
        console.log('---------------');
        console.log('Generating index.html file');
        console.log('---------------');

        writeFileAsync('./dist/index.html', completeHtml);

        console.clear();
        console.log('---------------');
        console.log('File created successfully!');
        console.log('---------------');
    } catch (err) {
        return console.log(err);
    }
};

//user data prompts
async function prompt() {
    let responseComplete = '';

    do {
        try {
            console.log('---------------');

            let response = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Please enter employee name',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter an employee name');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Please enter employee id',
                    validate: idInput => {
                        if (idInput) {
                            return true;
                        } else {
                            console.log('Please enter an id number');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Please enter employee email',
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log('Please enter an email address');
                            return false;
                        }
                    }
                },
                {
                    type: 'list',
                    name: 'role',
                    message: 'Please select employee role',
                    choices: [
                        'Manager',
                        'Engineer',
                        'Intern'
                    ]
                }
            ]);

            let nextResponse = '';

            if (response.role === 'Manager') {
                nextResponse = await inquirer.prompt ([{
                    type: 'input',
                    name: 'roleQuestion',
                    message: 'Please enter employee office number',
                    validate: roleQuestionInput => {
                        if (roleQuestionInput) {
                            return true;
                        } else {
                            console.log ('Please input an office number');
                            return false;
                        }
                    }
                }])
                
                const manager = new Manager (response.name, response.id, response.email, nextResponse.roleQuestion);
                teamArray.push (manager);

            } else if (response.role === 'Engineer') {
                nextResponse = await inquirer.prompt ([{
                    type: 'input',
                    name: 'roleQuestion',
                    message: 'Please enter employee GitHub account username',
                    validate: roleQuestionInput => {
                        if (roleQuestionInput) {
                            return true;
                        } else {
                            console.log ('Please enter a GitHub username');
                            return false;
                        }
                    }
                }])

                const engineer = new Engineer (response.name, response.id, response.email, nextResponse.roleQuestion);
                teamArray.push (engineer);

            } else if (response.role === 'Intern') {
                nextResponse = await inquirer.prompt ([{
                    type: 'input',
                    name: 'roleQuestion',
                    message: 'Please enter intern school name',
                    validate: roleQuestionInput => {
                        if (roleQuestionInput) {
                            return true;
                        } else {
                            console.log ('Please enter school name');
                            return false;
                        }
                    }
                }])

                const intern = new Intern (response.name, response.id, response.email, nextResponse.roleQuestion);
                teamArray.push (intern);
            }
        } catch (err) {
            return console.log (err);
        }

        responseComplete = await inquirer.prompt ([{
            type: 'list',
            name: 'complete',
            message: 'Do you have any more employees to add?',
            choices: [
                'Yes',
                'No'
            ]
        }]);
    } while (responseComplete === 'Yes');
}

primary ();