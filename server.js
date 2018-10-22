const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const app = express()

const PORT = process.env.PORT || 3000

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())


app.listen(PORT, () => console.log("App listening on:" + PORT))

require('./app/routing/apiRoutes')(app)
require('./app/routing/htmlRoutes')(app)
