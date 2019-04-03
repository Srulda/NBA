const express = require('express')
const router = express.Router()
const request = require('request')
const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756",
    "pistons": "1610612765",
    "bucks": "1610612749",
    "rockets": "1610612745",
    "hawks": "1610612737",
    "celtics": "1610612738",
    "nets": "1610612751",
    "hornets": "1610612766",
    "bulls": "1610612741",
    "cavaliers": "1610612739",
    "mavericks": "1610612742",
    "nuggets": "1610612743",
    "pacers": "1610612754",
    "clippers": "1610612746",
    "grizzlies": "1610612763",
    "timberwolves": "1610612750",
    "pelicans": "1610612740",
    "knicks": "1610612752",
    "thunder": "1610612760",
    "magic": "1610612753",
    "76ers": "1610612755",
    "trail blazers": "1610612757",
    "kings": "1610612758",
    "spurs": "1610612759",
    "raptors": "1610612761",
    "jazz": "1610612762",
    "wizards": "1610612764"
}

router.get('/teams/:teamName', function (req, res) {
    request('http://data.nba.net/10s/prod/v1/2018/players.json', function (err, response) {
        let teamId
        let teamToNames = Object.keys(teamToIDs)
        const playersArr = []
        for (let t of teamToNames) {
            let tName = req.params.teamName
            if (t === tName) {
                teamId = teamToIDs[t]
            }
        }
        let data = JSON.parse(response.body)
        let playerDB = data.league.standard

        for (let p of playerDB) {
            if (p.isActive && p.teamId === teamId) {
                const playerDetails = {
                    firstName: p.firstName,
                    lastName: p.lastName,
                    position: p.pos,
                    jersey: p.jersey
                }
                playersArr.push(playerDetails)
            }
        }
        res.send(playersArr)
    })
})

module.exports = router
