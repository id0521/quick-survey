import isEmail from 'validator/lib/isEmail';

export default emails => {
  if (emails[emails.length-1] === ',') {
    emails = emails.slice(0, emails.length-1);
  }
  
  const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => !isEmail(email));

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }
};
