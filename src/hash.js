const { createHash } = require('crypto');

// Create a string hash
// Vulnerability: for the same password we have the same generated hash.
// With rainbow tables you can obtain the password.

function hash(input) {
    // if you want to crack the generated password with John the Ripper,
    // just save the hash to a txt file and then use the john <file> command
  
    // cracked with john the ripper using: john --format=Raw-MD5 <file> 
    /* return createHash('md5').update(input).digest('hex'); */
  
    // cracked with john the ripper using: john --format=Raw-SHA1-AxCrypt <file>
    return createHash('sha1').update(input).digest('hex');

    /* return createHash('sha256').update(input).digest('base64'); */
}

// Compare two hashed passwords

let password = 'hello';
const hash1 = hash(password);
console.log(`hash1`, hash1)

/// ... some time later

password = 'hello!';
const hash2 = hash(password);
console.log(`hash2`, hash2)
const match = hash1 === hash2;

console.log(match ? '✔️  good password' : '❌  password does not match');

 
