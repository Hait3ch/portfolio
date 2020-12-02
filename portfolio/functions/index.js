// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

const nodemailer = require("nodemailer");
const gmailEmail = functions.config().gmail.login;
const gmailPassword = functions.config().gmail.pass;
const toMail = functions.config().gmail.to;
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.submit = functions.https.onRequest(async (req, res) => {
  const email = req.query.email;
  const message = req.query.message;
  const time = new Date();

  await admin.firestore().collection("messages").add({ email, message, time });

  const mailOptions = {
    from: email,
    replyTo: email,
    to: toMail,
    subject: `Email from Portfolio website`,
    text: message,
    html: `<p>${message}`,
  };

  mailTransport.sendMail(mailOptions);

  res.status(200).end();
  // or you can pass data to indicate success.
  //res.status(200).send({ isEmailSend: true });
});
