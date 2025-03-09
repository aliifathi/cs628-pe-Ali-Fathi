const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    name: String,
    ingredients: [String],
    instructions: String,
});

module.exports = mongoose.model("Recipe", recipeSchema);
