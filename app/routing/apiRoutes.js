// const calc = require('../data/calc')
const friends = require('../data/friends')


module.exports = function (app){

    app.get('/api/friends', function (req, res){
       res.json(friends)
    })
    app.post('/api/friends', function (req, res){
        res.sendStatus(200)
        newInfo = req.body
        newFriend = friends.calculator(newInfo)
        // console.log('this is new friend after calculator has run:' + newFriend)
        friends.friendInfo.push(newInfo)
        console.log("new data added!")
        console.log(newInfo)
    })
    
}
