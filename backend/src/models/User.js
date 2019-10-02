const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: String
}) //definição de dados do usuário

module.exports = mongoose.model('User', UserSchema)