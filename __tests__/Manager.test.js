const Manager = require('../lib/Manager');

test ('creates a manager object', () => {
    const manager = new Manager('Mack');

    expect(manager.name).toBe('Mack');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number));
    expect(manager.role).toBe('Manager');
});