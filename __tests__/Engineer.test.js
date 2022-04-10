const Engineer = require('../lib/Engineer');

test ('creates a engineer object', () => {
    const engineer = new Engineer('Mack');

    expect(engineer.name).toBe('Mack');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.role).toBe('Engineer');
});