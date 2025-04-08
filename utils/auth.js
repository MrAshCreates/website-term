const crypto = require('crypto');

const twoFATokens = new Map();

function generateCode() {
  return crypto.randomInt(100000, 999999).toString();
}

function saveCode(email, code) {
  twoFATokens.set(email, {
    code,
    expiresAt: Date.now() + 5 * 60 * 1000
  });
}

function verifyCode(email, input) {
  const entry = twoFATokens.get(email);
  if (!entry) return false;
  if (Date.now() > entry.expiresAt) return false;
  return entry.code === input;
}

module.exports = { generateCode, saveCode, verifyCode };