const bs58 = require('bs58').default;


// Replace this with your numerical private key array
const numericalPrivateKey = [/* your private key numbers here */];

// Convert the numerical array to a Buffer
const privateKeyBuffer = Buffer.from(numericalPrivateKey);

// Encode the Buffer into a base58 string
const base58PrivateKey = bs58.encode(privateKeyBuffer);

console.log("Base58 Encoded Private Key:", base58PrivateKey);
