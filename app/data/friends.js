
const calculator = function (myScores) {
  let testscore = myScores.scores
  let newfriendData = ""
  // Calculator that takes two rays and finds the difference between corresponding scores using absolute value. Returns as new array.
  const differenceCalc = function (friendscore) {
      let tempArray = []
      for (i = 0; i < testscore.length; i++) {
          tempArray.push(Math.abs(testscore[i] - friendscore[i]))
      }
      return tempArray

  }
  // Add function for reduce method
  const add = (a, b) =>
      a + b

  // Calculator that loops through friends data and finds the difference between your scores and theirs. Then reduces differences into a single value and pushes into a temp array. Then we use a spread operator to find the smallest value in the array. 
  const smallestNum = function () {
      let rankArray = []
      let reduceArray = []
      friends.forEach(x => {
          friendscore = x.scores
          let diffScore = differenceCalc(friendscore)
          let friendTotal = diffScore.reduce(add)
          reduceArray.push(friendTotal)
      })
      rankArray = reduceArray
      // console.log("reducearray" + reduceArray)
      // console.log("rankarray" + rankArray)
      let lowestScore = Math.min(...reduceArray)
      // console.log("lowest score" + lowestScore)
      let placefinder = rankArray.indexOf(lowestScore)
      newfriendData = friends[placefinder]
      
      // console.log(newfriendData)
      
      // console.log("placefinder: " + placefinder)
      

  }
  smallestNum()
  return newfriendData
}



const friends = [
  {
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  },
  {
    "name": "Vance",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
      3,
      9,
      7,
      3,
      8,
      6,
      3,
      7,
      2,
      1
    ]
  },
 
]

module.exports.calculator = calculator
module.exports.friendInfo = friends

