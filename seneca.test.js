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
});

/**
 * Tests for seneca.formatSenecaEmail()
 */
describe('seneca.formatSenecaEmail()', () => {
  test('adds @myseneca.ca to the end of name', () => {
    const name = 'mshaw';
    expect(seneca.formatSenecaEmail(name)).toBe('mshaw@myseneca.ca');
  });
});
