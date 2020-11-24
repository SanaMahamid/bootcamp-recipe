class Renderer {
    render(data) {
        $('#recipes').empty()
        const source = $('#recipe-template').html()
        const template = Handlebars.compile(source) 
        const newHtml = template({data})
        $('#recipes').append(newHtml)
    }
}