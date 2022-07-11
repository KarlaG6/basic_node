const { Router } = require('express');
const { recipe, recipes, createRecipe, updateRecipe, deleteRecipe } = require('../controllers/recipe.controller');

const router = Router();

router.get('/', recipes);
router.get('/:id', recipe);
router.post('/', createRecipe);
router.put('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);



module.exports = router;