const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '', id = 12, email = '', github = 'bobsgittin') {
        super(name, id, email);

        this.github = github;
        this.role = 'Engineer';
    }

    getGithub() {
        return github;
    }
};

module.exports = Engineer;