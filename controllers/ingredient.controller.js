const { response, request } = require("express");

const ingredients = (req = request, res = response) => {
  res.json({ "msg": "get ingredients" });
};
const ingredient = (req = request, res = response) => {
  res.json({ "msg": "get ingredient" });
};
const createIngredient = (req = request, res = response) => {
  res.json({ "msg": "post" });
};
const updateIngredient = (req = request, res = response) => {
  res.json({ "msg": "put" });
};
const deleteIngredient = (req = request, res = response) => {
  res.json({ "msg": "delete" });
};

module.exports = {
  ingredient,
  ingredients,
  createIngredient,
  updateIngredient,
  deleteIngredient,
};
