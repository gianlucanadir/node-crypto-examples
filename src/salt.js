const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

function signup(email, password) {
    // The purpose of salt is to defeat rainbow tables, it is not a key
    const salt = randomBytes(16).toString('hex');

    const hashedPassword = scryptSync(password, salt, 64).toString('hex');

    const user = { email, password: `${salt}:${hashedPassword}` }
  
    /* users.push(user); */

    return user
}

function login(email, password) {
    const user = users.find(v => v.email === email);
  
    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);
  
    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);
    
    if (match) {
        return 'login success!'
    } else {
        return 'login fail!'
    }
}

console.log(signup('test@test.com', 'password'))
