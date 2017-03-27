// First require (e.g., load) our seneca.js module
const seneca = require('./seneca');

/**
 * Tests for seneca.isValidEmail()
 */
describe('seneca.isValidEmail()', () => {
  test('returns true for simple myseneca address', () => {
    const simpleEmail = 'someone@myseneca.ca';
    expect(seneca.isValidEmail(simpleEmail)).toBe(true);
  });
  test('returns false for a non-myseneca address', () => {
    const gmailAddress = 'someone@gmail.com';
    expect(seneca.isValidEmail(gmailAddress)).toBe(false);
  });
  test('returns true for email with trailing spaces at the beginning', () => {
    const traillingEmail = ' someone@myseneca.ca';
    expect(seneca.isValidEmail(traillingEmail)).toBe(true);
  });
  test('returns true for address with trailling spaces at the end', () => {
    const traillingEmail = 'someone@myseneca.ca ';
    expect(seneca.isValidEmail(traillingEmail)).toBe(true);
  });
  test('returns true for student myseneca address', () => {
    const studentEmail = 'someone@myseneca.ca';
    expect(seneca.isValidEmail(studentEmail)).toBe(true);
  });
  test('returns true for faculty senecacollege address', () => {
    const facultyEmail = 'someone@senecacollege.ca';
    expect(seneca.isValidEmail(facultyEmail)).toBe(true);
  });
  test('returns true for deprecated senecac address', () => {
    const deprecatedEmail = 'someone@senecac.on.ca';
    expect(seneca.isValidEmail(deprecatedEmail)).toBe(true);
  });
  test('returns false for address without a domain', () => {
    const invalidEmail = 'someonesenecac.on.ca';
    expect(seneca.isValidEmail(invalidEmail)).toBe(false);
  });
  test('returns false for \'null\' address', () => {
    const invalidEmail = null;
    expect(seneca.isValidEmail(invalidEmail)).toBe(false);
  });
});

/**
 * Tests for seneca.formatSenecaEmail()
 */
describe('seneca.formatSenecaEmail()', () => {
  test('adds @myseneca.ca to the end of name', () => {
    const name = 'mshaw';
    expect(seneca.formatSenecaEmail(name)).toBe('mshaw@myseneca.ca');
  });
  test('trailling space in the beginning should return a valid email', () => {
    const name = ' mshaw';
    expect(seneca.formatSenecaEmail(name)).toBe('mshaw@myseneca.ca');
  });
  test('trailling space in the end should return a valid email', () => {
    const name = ' mshaw';
    expect(seneca.formatSenecaEmail(name)).toBe('mshaw@myseneca.ca');
  });
  test('\'null\' should return \'null\'', () => {
    const name = null;
    expect(seneca.formatSenecaEmail(name)).toBe(null);
  });
  test('name with a domain should return \'null\'', () => {
    const name = 'mshaw@gmail.com';
    expect(seneca.formatSenecaEmail(name)).toBe(null);
  });
  test('name with numbers should return a valid @myseneca.ca address', () => {
    const name = 'mshaw123';
    expect(seneca.formatSenecaEmail(name)).toBe('mshaw123@myseneca.ca');
  });
});
