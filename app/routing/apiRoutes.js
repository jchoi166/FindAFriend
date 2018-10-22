const path = require('path')
const friends = require('../data/friends')

module.exports = function (app){

    app.get('/api/friends', function (req, res){
       res.json(friends)
    })
    app.post('/api/friends', function (req, res){
        newInfo = req.body
        friends.push(newInfo)
        console.log("new data added!")
        console.log(newInfo)
        res.sendStatus(200)
    })
    
}
