// Import dependencies
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS middleware
app.use(cors());

// Store temporary emails (use a database in production)
const tempEmails = new Map();

// Generate temporary email (format: random string@your-domain.com)
app.get('/generate-email', (req, res) => {
  const randomStr = Math.random().toString(36).substring(2, 10);
  // Replace with your own domain (example uses a public temp email domain)
  const email = `${randomStr}@temp-mail.org`;
  tempEmails.set(email, []); // Initialize empty email list for this address
  res.json({ email });
});

// Check for new emails (connect to mail server in production)
app.get('/check-emails', (req, res) => {
  const emails = tempEmails.get(req.query.email) || [];
  res.json(emails);
});

// Start server
app.listen(3000, () => {
  console.log('Backend server running at: http://localhost:3000');
});
