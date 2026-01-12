// server.js
const express = require('express');
const app = express();

// 存储临时邮箱（实际需用数据库）
const tempEmails = new Map();

// 生成临时邮箱（格式：随机字符串@你的域名.com）
app.get('/generate-email', (req, res) => {
  const randomStr = Math.random().toString(36).substring(2, 10);
  const email = `${randomStr}@your-domain.com`;
  tempEmails.set(email, []); // 存储该邮箱的邮件
  res.json({ email });
});

// 检查邮件（实际需对接邮件服务器获取新邮件）
app.get('/check-emails', (req, res) => {
  const emails = tempEmails.get(req.query.email) || [];
  res.json(emails);
});

app.listen(3000, () => console.log('服务启动：http://localhost:3000'));
