const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "iryna_bodnariuk@meta.ua" };
  await sgMail.send(email);
  return true;
};
module.exports = sendEmail;

// const email = {
//   to: "xemig81656@loongwin.com",
//   from: "iryna_bodnariuk@meta.ua",
//   sudject: "Test email",
//   html: "<p>TEST email</p>",
// };

// sgMail
//   .send(email)
//   .then(() => console.log("Email sent"))
//   .catch((error) => console.log(error.mesagge));

//

// const msg = {
//   to: "test@example.com", // Change to your recipient
//   from: "test@example.com", // Change to your verified sender
//   subject: "Sending with SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// };
