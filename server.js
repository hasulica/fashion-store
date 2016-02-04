'use strict'

var express = require('express');
var data = require('./store.json');

var app = express();

app.use('/public', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.set('views',__dirname + '/views');
app.set('view engine', 'jade');

app.listen('3000',function(){
  console.log('Server running at http://localhost:3000')
});

app.get('/',function(req,res){
  res.render('index', {store: data});
})
