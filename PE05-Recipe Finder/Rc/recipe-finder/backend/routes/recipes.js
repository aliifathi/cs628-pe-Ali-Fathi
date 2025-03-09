const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");

// Get all recipes
router.get("/", async (req, res) => {
    const recipes = await Recipe.find();
    res.json(recipes);
});

// Get recipe by ID
router.get("/:id", async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);
    res.json(recipe);
});

// Add new recipe
router.post("/", async (req, res) => {
    const { name, ingredients, instructions } = req.body;
    const newRecipe = new Recipe({ name, ingredients, instructions });
    await newRecipe.save();
    res.json(newRecipe);
});

// Update recipe
router.put("/:id", async (req, res) => {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedRecipe);
});

// Delete recipe
router.delete("/:id", async (req, res) => {
    await Recipe.findByIdAndDelete(req.params.id);
    res.json({ message: "Recipe deleted" });
});

module.exports = router;
