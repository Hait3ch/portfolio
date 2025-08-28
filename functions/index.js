// https://stackoverflow.com/questions/57009371/access-to-xmlhttprequest-at-from-origin-localhost3000-has-been-blocked

// var express = require("express");
// var cors = require("cors");
// var app = express();

// app.use(cors());

// app.get("/products/:id", function (req, res, next) {
//   res.json({ msg: "This is CORS-enabled for all origins!" });
// });

// // app.listen(80, function () {
// //   console.log("CORS-enabled web server listening on port 80");
// // });

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

// const nodemailer = require("nodemailer");
// const gmailEmail = functions.config().gmail.login;
// const gmailPassword = functions.config().gmail.pass;
// const toMail = functions.config().gmail.to;
// const mailTransport = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: gmailEmail,
//     pass: gmailPassword,
//   },
// });

// exports.submit = functions.https.onRequest(async (req, res) => {
//   const email = req.query.email;
//   const message = req.query.message;
//   const time = new Date();

//   await admin.firestore().collection("messages").add({ email, message, time });

//   const mailOptions = {
//     from: email,
//     replyTo: email,
//     to: toMail,
//     subject: `Email from Portfolio website`,
//     text: message,
//     html: `<p>${message}`,
//   };

//   mailTransport.sendMail(mailOptions);

//   res.status(200).end();
//   // or you can pass data to indicate success.
//   //res.status(200).send({ isEmailSend: true });
// });

exports.addUser = functions.https.onRequest(async (req, res) => {
  const name = req.query.name;
  const skillLevel = req.query.skillLevel;
  const uuid4 = req.query.uuid4;

  await admin.firestore().collection("users").add({ name, skillLevel, uuid4 });

  res.status(200).end();
});
/*
exports.getUsers = functions.https.onRequest(async (req, res) => {
  await admin
    .firestore()
    .collection("users")
    .get()
    .then((querySnapshot) =>
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      })
    );

  res.status(200).end();
});
*/

// exports.deleteUser = functions.https.onRequest(async (req, res) => {
//   await admin.firestore().collection("users").add({ name: "moi" });
// });
