class APIManager {
    loadData(input){
      return  $.get(`http://localhost:2345/teams/${input}`)
    }
}
