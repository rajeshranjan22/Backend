const mongoose = require("mongoose")
require("dotenv").config()

const connection = mongoose.connect(process.env.mongoURL)

// Basic structure of Data
const Schema = mongoose.Schema({
    name: String,
    team: String,
    age: Number,
    position: Number,
})

const UserModel = mongoose.model("user", Schema)

module.exports = {
    connection,
    UserModel
}