const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Mack');

    expect(employee.name).toBe('Mack');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toBe('Employee');
});