const path = require('path')
const router = require('express').Router()
const root = path.join(__dirname,'..','..','public')

router.get('/api/v1', (request, response) => {
    const recipes = require("../../../data/recipes.json")
    recipesMap = recipes.map(({id,title,image,prepTime,difficulty})=>{
        return {id,title,image,prepTime,difficulty}
    })
    response.send(recipesMap)
})
router.post('/api/v1/recipe/add',(request,response)=>{
    const recipes = require("../../../data/recipes.json")
    const {title,image,ingredients,instructions,prepTime,difficulty}=request.body
    const id = recipes.length + 1
    recipes.push({id,title,image,ingredients,instructions,prepTime,difficulty})
    response.send({id,title,image,ingredients,instructions,prepTime,difficulty})
})
router.get('/api/v1/recipe/:id',(request,response)=>{
    const {id} = request.params
    const recipes = require("../../../data/recipes.json")
    const found = recipes.find(r => r.id.toString() === id)
    if (found) response.send(found)
    else response.send({erorr:{message:`Could not find recipe with ID: ${id}`}})
})
module.exports = router