class Employee {
    constructor(name = '') {
        this.name = name;
    }
    constructor(id = '') {
        this.id = id;
    }
    constructor(email = '') {
        this.email = email;
    }

    getName() {
        return name;
    }

    getId() {
        return id;
    }

    getEmail() {
        return email;
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;