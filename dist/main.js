
const renderer = new Renderer()
const searchRecipe = function(){
    let ingredient = $("#ingredient-input").val().toLowerCase() 
    $.get(`/recipes/${ingredient}`, function (response) {
        renderer.render(response)
    })

}

$("#recipes").on("click", ".recipe-image", function(){
    let firstIngredient = $(this).closest(".recipe").find("ul").find("li").first().text()
    alert(firstIngredient)
})

