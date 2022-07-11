const { Router } = require('express');
const { ingredient, ingredients, createIngredient, updateIngredient, deleteIngredient } = require('../controllers/ingredient.controller');

const router = Router();

router.get('/', ingredients);
router.get('/:id', ingredient);
router.post('/', createIngredient);
router.put('/:id', updateIngredient);
router.delete('/:id', deleteIngredient);



module.exports = router;