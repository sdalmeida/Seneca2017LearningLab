// [INFO] See discussion of node.js exports here:
// https://www.sitepoint.com/understanding-module-exports-exports-node-js/

/**
 * Given a string `email`, return `true` if the string is in the form
 * of a valid Seneca College email address, `false` othewise.
 */
exports.isValidEmail = function (email) {
  let isValid = false;
  if (typeof email !== 'string' || email === null) {
    return isValid;
  }
  const domain = email.trim().split('@');
  switch (domain[1]) {
    case 'myseneca.ca':
    case 'senecacollege.ca':
    case 'senecac.on.ca':
      isValid = true;
      break;
    default: isValid = false;
  }
  return isValid;
};

/**
 * Given a string `name`, return a formatted Seneca email address for
 * this person. NOTE: the email doesn't need to be real/valid/active.
 */
exports.formatSenecaEmail = function (name) {
  let email = name;
  if (typeof email === 'string' && email.split('@')[1] === undefined) {
    email = email.trim().concat('@myseneca.ca');
  } else {
    email = null;
  }
  return email;
};
