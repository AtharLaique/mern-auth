const User = require("../models/user");
const jwt = require("jsonwebtoken");
const sgMail = require("@sendgrid/mail");
const { send } = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID);
const nodemailer = require("nodemailer");
const crypto = require("crypto");
require("dotenv").config();
// Signup with email validation
exports.signup = (req, res) => {
  const { name, email, password } = req.body;
  User.find({ email }).exec((error, data) => {
    if (data.length > 0) {
      return res.send({
        status:422,
        message:'This Email Is Already Exist'
    })
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
      return res.send({
        status:200,
        message:'Email is sent to your acount !'
    })
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

// Acount Activation
exports.activateAcount = (req, res) => {
  const { token } = req.body;

  if (token) {
    jwt.verify(token, process.env.JWT_ACOUNT_ACTIVATION, function (err, data) {
      if (err) {
        return res.status(401).json({ message: "Token is expired" });
      }
      const { name, email, password } = jwt.decode(token);

      const newUser = new User({
        name: name,
        email: email,
        password: password,
      });
      newUser.save((err, result) => {
        if (err) {
          return res.status(422).json({ message: err });
        }
        res.status(200).json({ message: "Signup Success ! Plase Signin" });
      });
    });
  }
};
// Get Token from body
// Verify the token
// If not valid then token is expired
// else extract/decode name,email ,password
// crate user instance
// save user with hashed password

//SignIn
exports.signin = (req, res) => {
  const { email, password } = req.body;
  User.find({ email: email }).exec((err, user) => {
    if (err || user.length == 0) {
      return res
        .status(422)
        .json({ message: "This email is not exist. Please Signup" });
    }
    if (!user[0].authenticate(password)) {
      return res.status(400).json({ message: "Password is Incorrect" });
    }
    const token = jwt.sign({ _id: user[0]._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    const { _id, name, email, role } = user[0];
    return res.status(200).json({
      token,
      user: { _id, name, email, role },
    });
  });
};
// Fetch email and password from body OK
// Putt validation on email and password OK
// Check is email exist in db OK
// If not exist then return This email is not exist OK
// If exist then compare password with hashing OK
// If password match then create token with expiry OK 
// Send back to client OK
