const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb://127.0.0.1:27017/cricket")

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