const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const { generateCode, saveCode, verifyCode } = require('./utils/auth');
const { send2FACode } = require('./utils/mailer');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/send-code', async (req, res) => {
  const { email } = req.body;
  const code = generateCode();
  saveCode(email, code);
  try {
    await send2FACode(email, code);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/verify-code', (req, res) => {
  const { email, code } = req.body;
  if (verifyCode(email, code)) {
    res.json({ verified: true });
  } else {
    res.status(401).json({ verified: false });
  }
});

app.listen(PORT, () => {
  console.log(`2FA server listening at http://localhost:${PORT}`);
});