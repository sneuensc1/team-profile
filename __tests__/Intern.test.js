const Intern = require('../lib/Intern');

test ('creates a intern object', () => {
    const intern = new Intern('Mack');

    expect(intern.name).toBe('Mack');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.role).toBe('Intern');
});