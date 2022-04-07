const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '', id = 12, email = '', office = 45) {
        super(name, id, email);

        this.office = office;
        this.role = 'Manager'
    }

    getOffice() {
        return office;
    }
};

module.exports = Manager;