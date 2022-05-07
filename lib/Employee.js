class Employee {
    constructor(name = 'Mack', id = 123, email = 'mack@email.com') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee'
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
        return this.role;
    }
}

module.exports = Employee;