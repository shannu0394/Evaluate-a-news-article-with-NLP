const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
var cors = require('cors')
var AYLIENTextAPI = require('aylien_textapi');


var textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });

const app = express()
app.use(cors())
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


app.get('/test', function (req, res) {
    textapi.sentiment({
        text: 'John is a very good football player',
        mode: 'tweet'
      }, function(error, response) {
        if (error === null) {
            console.log(response);
            res.json(response);
        }
      });
})

// module.exports = function divd(a,b){
//     return a/b;
// };
