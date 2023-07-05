const { ForgotPassword } = require("../models/ForgotPassword")
const {User} = require("../models/WebUser")
const nodemailer = require('nodemailer');

const forgotPasswordController = {
    sendlink: async (req, res) => {

        const { email } = req.body;

        const user = await User.findOne({ email: email });

        if (!user) {
            alert('Not Found this email')
          }
        
        else{
            const resetToken = generateResetToken();

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'testcode202@gmail.com',
                  pass: 'testcode'
                }
              });

              const resetLink = `https://localhost:3000/changepassword?/userId=${user._id}&token=${resetToken}`;

              const mailOptions = {
                from: 'testcode202@gmail.com',
                to: email,
                subject: 'Password Reset',
                text: `Please click the following link to reset your password: ${resetLink}`,
              };

              await transporter.sendMail(mailOptions);
        }
        

          
    },
}

module.exports = {
    forgotPasswordController
}
