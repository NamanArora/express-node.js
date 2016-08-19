/**
 * Created by naman_3uwwmg4 on 17-08-2016.
 */

var express = require('express');
var app = express.Router();

app.route('/')
    .get(function (req,res) {
        res.send("GET");
    })
    .post(function (req,res) {
        res.send("POST");
    });


module.exports=app;