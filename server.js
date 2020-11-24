const express = require('express')
const path = require('path')
const urllib = require('urllib')



const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/sanity', function(req, res){
    res.send("OK")
})



app.get('/recipes/:ingredient', function(req, res){
    let recipes
    const ingredient = req.params.ingredient
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, (err, data, response) => {
        //console.log(response.toString())
        const result = JSON.parse(data.toString())
        recipes = result.results
        recipes = recipes.map(r => {
            return {
                ingredients: r.ingredients,
                title: r.title,
                thumbnail: r.thumbnail,
                href: r.href
            }
        })
        res.send(recipes)
    })
})




const port = 8080
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})