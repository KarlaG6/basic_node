const {response, request} = require('express');

const recipes = (req = request, res = response) => {
    res.json({"msg" : "get recipes"});
};
const recipe = (req = request, res = response) => {
    res.json({"msg" : "get recipe"});
};
const createRecipe = (req = request, res = response) => {
    res.json({"msg" : "post"});
};
const updateRecipe = (req = request, res = response) => {
    res.json({"msg" : "put"});
};
const deleteRecipe = (req = request, res = response) => {
    res.json({"msg" : "delete"});
};

module.exports = {
    recipe, recipes, createRecipe, updateRecipe, deleteRecipe
}