const renderer = new Renderer()
const apiManager = new APIManager()

const renderPlayers = function () {
        let input = $("#userInput").val()
        $('#logos').empty()
        $('.players-container').empty()
        apiManager.loadData(input).then(function (data) {
                renderer.render(data)
        })
}