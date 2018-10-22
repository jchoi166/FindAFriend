
const friends = require('./app/data/friends')

const myScores = [
    {
       "name": "Jin" ,
       "link": "www.addictinggames.com",
       "scores": [3,4,6,4,3,3,1,8,9,4]
    }
]

// Calculator that takes two rays and finds the difference between corresponding scores using absolute value. Returns as new array.
const differenceCalc = function(friendscore) {
    let tempArray = []
    testscore = myScores[0].scores
    for (i = 0; i < testscore.length ; i++){
        tempArray.push( Math.abs(testscore[i] - friendscore[i]))
    }
    return tempArray
    
}
// Add function for reduce method
const add = (a, b) =>
  a + b

// Calculator that loops through friends data and finds the difference between your scores and theirs. Then reduces differences into a single value and pushes into a temp array. Then we use a spread operator to find the smallest value in the array. 
const calculator = function() {
    let tempArray = []
    friends.forEach( x => {
        friendscore = x.scores
        let diffScore = differenceCalc(friendscore)
        let friendTotal = diffScore.reduce(add)
        tempArray.push(friendTotal)
    })
    console.log(tempArray)
    let lowestScore = Math.min(...tempArray)
    console.log(lowestScore)

}

calculator()