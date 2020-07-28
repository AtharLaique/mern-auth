const User = require("../models/user");
const jwt = require("jsonwebtoken");
const sgMail = require("@sendgrid/mail");
const { send } = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID);
const nodemailer = require("nodemailer");
require("dotenv").config();

// Signup with email validation
exports.signup = (req, res) => {
  const { name, email, password } = req.body;
  User.find({ email }).exec((error, data) => {
    if (data.length > 0) {
      return res.status(422).json({ message: "This Email Is Already Exists" });
    }
    const token = jwt.sign(
      { name, email, password },
      process.env.JWT_ACOUNT_ACTIVATION,
      { expiresIn: "10m" }
    );
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "a015coder@gmail.com",
        pass: process.env.PASSWORD,
      },
    });
    let mailOptions = {
      from: "a015coder@gmail.com",
      to: email,
      subject: "Acount Activation Link",
      html: ` <p> Please Use The Following Link To Activate Your Acount</p>
    <p> ${process.env.CLIENT_URL}/auth/activate/${token}</p>
  `,
    };
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        return console.log(err);
      }
      return console.log("Email sent!!!");
    });
  });
};
// Get signup para meters OK
// Check weather email exsit or not OK
// Create jwt token using name , email and password OK
// Create Template for email OK
// import nodemailer object OK
// make transpoter object OK
// male mailOptions object OK
// Send email Ok 
