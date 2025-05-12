import express from 'express';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://user_selvi:user_selvi2025@my-project.atsgp5o.mongodb.net/?retryWrites=true&w=majority&appName=My-project')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  message: String,
});
const Contact = mongoose.model('Contact', contactSchema);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'angelinselvi2005@gmail.com',
    pass: 'flpjfozukojvunfh',
  },
});

app.post('/submit-form', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    const newContact = new Contact({ firstName, lastName, email, phone, message });
    await newContact.save();
    console.log('✅ Data saved to MongoDB:', req.body);

    const mailOptions = {
      from: 'angelinselvi2005@gmail.com',
      to: 'angelinselvi2005@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent:', info.response);

    res.status(200).json({ message: 'Form submitted and email sent successfully' });
  } catch (error) {
    console.error('❌ Submission or Email error:', error);
    res.status(500).json({ message: 'Error submitting form or sending email' });
  }
});

app.listen(5000, () => {
  console.log('🚀 Server running at http://localhost:5000');
});
