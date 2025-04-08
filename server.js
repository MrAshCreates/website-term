app.post('/verify-password', (req, res) => {
  const { password } = req.body;

  if (password === process.env.LOGIN_PASSWORD) {
    return res.json({ verified: true });
  }

  return res.json({ verified: false });
});