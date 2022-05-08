//requirements
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Employee = require('../Employee');
const Manager = require('../Manager');
const Engineer = require('../Engineer');
const Intern = require('../Intern');
const html = require('./src/htmlTemp');
const email = require('email-validator');

//asynchronous functions
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let teamString = '';

console.clear();
console.log('---------------');
console.log('A Team Profile Generator by sneuensc1');

//Other functions
