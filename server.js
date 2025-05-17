const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Replace these with your email credentials or SMTP service
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'anshuiitg2023@gmail.com',        // your Gmail
        pass: 'gyuy xshf ugdc lwog'       // app password, NOT your normal Gmail password
    }
});

app.post('/send-message', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'bmondalhyd@gmail.com', // where you want to receive messages
        subject: `New message from portfolio site by ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending mail:', error);
            return res.status(500).json({ success: false, message: 'Failed to send email.' });
        }
        res.json({ success: true, message: 'Email sent successfully.' });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
