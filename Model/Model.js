const mongoose = require('mongoose');


const users = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const interview = new mongoose.Schema({
    uid:String,
    title:String,
    company:String,
    experience: String
});

const user = mongoose.model("User", users);

const inter = mongoose.model("Interview_Experience", interview);

module.exports = { user, inter };