const express = require("express");
const cors = require("cors");

const ingredient = require('./routes/ingredient.routes')
const recipe = require('./routes/recipe.routes')

const app = express();

const port = 3000;

const path = { 
    ingredient: "/api/ingredient", 
    recipe: "/api/recipe" 
};

app.use(path.ingredient, ingredient )
app.use(path.recipe, recipe )

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
