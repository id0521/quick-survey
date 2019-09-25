import isEmail from 'validator/lib/isEmail';

export default email => {
  if (!isEmail(email)) {
    return 'Please provide a valid email';
  }
};
