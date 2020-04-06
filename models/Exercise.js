const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    title: String,
    body: String
});

const User = mongoose.model("Exercise", ExerciseSchema);

module.exports = User;
