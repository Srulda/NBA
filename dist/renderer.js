class Renderer {
    render(data){
        let source = $('#players-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template({data});
        $('.players-container').append(newHTML);
    }
}



