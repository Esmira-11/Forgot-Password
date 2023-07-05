const { default: mongoose, Schema } = require("mongoose");


const ForgotPasswordSchema = new Schema({
    email:String
})

const ForgotPassword = mongoose.model('ForgotPassword', ForgotPasswordSchema);

module.exports = {
    ForgotPassword
}