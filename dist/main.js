const renderPlayers = function () {
    let inp = $("#userInput").val()
    $('#logos').empty()
    $('.players-container').empty()
    $.get(`http://localhost:2345/teams/${inp}`, (players) => {
    render(players)
     })
}

const render = function(players){
        let source = $('#players-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template({players});
        $('.players-container').append(newHTML);

}

