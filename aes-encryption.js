
import crypto from "crypto";

// Set the secret key
const key = 'MySecretKey';

// Encrypt the data
function encrypt(data) {
  const cipher = crypto.createCipher('aes192', key);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// Decrypt the data
function decrypt(data) {
  const decipher = crypto.createDecipher('aes192', key);
  let decrypted = decipher.update(data, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// Test the encryption and decryption
// const originalData = 'World!';
// const encryptedData = encrypt(originalData);
// console.log(encryptedData); // Outputs the encrypted data in hexadecimal format
// const decryptedData = decrypt(encryptedData);
// console.log(decryptedData); // Outputs the original data

export {decrypt, encrypt}
