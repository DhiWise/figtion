var express = require('express')
var cors = require('cors')
var axios = require('axios')

var app = express()
app.use(express.json());
app.use(cors())

app.post("/data",function(req,res){
    axios(req.body)
    .then(function (response) {
        res.json(response.data)
    //   console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    //   console.log(error);
    res.json(error)
    });
})

app.listen(8045, function () {
    console.log('CORS-enabled web server listening on port 8045')
})