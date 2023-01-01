const { createHmac } = require('crypto');

// HMAC is a keyd hash of data - like a hash with a password
// For the same key it generates the same hash

const key = 'super-secret!';
const message = 'hello';

const hmac = createHmac('sha256', key).update(message).digest('hex');

console.log(hmac);

const key2 = 'super-super-secret';
const hmac2 = createHmac('sha256', key2).update(message).digest('hex');

console.log(hmac2);
