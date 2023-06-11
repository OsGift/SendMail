const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());

app.post("/send-email", function(req, res) {
  const { name, email, subject, message } = req.body;

  // Create a transport object using your email service provider's SMTP settings
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "devjaynie@gmail.com",
      pass: "Password1$12"
    }
  });

  // Email options
  const mailOptions = {
    from: "devjaynie@gmail.com",
    to: "devjaynie@gmail.com",
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Send email
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully");
    }
  });
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
