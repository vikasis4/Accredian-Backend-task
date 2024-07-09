const dotenv = require('dotenv');
dotenv.config()
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.mail_account,
        pass: process.env.mail_pass,
    },
});
async function sendEmail(email, to, name, course_name, code) {
    var res = await transporter.sendMail({
        from: process.env.mail_account,
        to: email,
        subject: "Accredian Course Referral",
        html: `<h3>Dear ${to}, </h3><h3>Your Friend ${name} has refered and adviced you to join the Course ${course_name}.</h3>
        <h3> Use The following Coupon code while purchasing the course to earn bonus Money</h3><h3> ${code}</h3>
        <h3>Click on the Following <a href="https://google.com">Link</a> to Purchase the Course</h3>`,
    });
    return res.rejected == 0 ? true : false
}

module.exports = sendEmail