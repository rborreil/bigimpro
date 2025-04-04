const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USER,
      subject: `Nouveau message de ${name}`,
      text: message,
    });

    res.status(200).send('Message envoyé !');
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur d'envoi");
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));