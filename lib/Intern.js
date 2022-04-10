const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '', id = 12, email = '', school = 'University of Michigan-Dearborn') {
        super(name, id, email);

        this.school = school;
        this.role = 'Intern';
    }

    getSchool() {
        return school;
    }
};

module.exports = Intern;