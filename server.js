const express = require('express');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const twoFATokens = new Map();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/send-code', async (req, res) => {
  const { email } = req.body;
  const code = crypto.randomInt(100000, 999999).toString();

  twoFATokens.set(email, {
    code,
    expiresAt: Date.now() + 5 * 60 * 1000
  });

  try {
    await