var express = require('express');
var bodyParser = require('body-parser');

var connection = require('./app/config/connection');
var routes = require('./app/controllers/routes');

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

connection.init();
routes.configure(app);

var server = app.listen(8000, function(){
  console.log('Server listening on port ' + server.address().port);
});


this.get = function(res) {
    connection.acquire(function(err,con) {
      con.query('select * from todo_list', function(err,result) {
        con.release();
        res.send(result);
        console.log("Get successful");
      });
    });
  };
  app.get('/todo',function(req,res) {
    todo.get(res);
  });
  this.getByID = function(id,res) {
    connection.acquire(function(err,con) {
      con.query('select * from todo_list where id = ?', id, function(err,result) {
        con.release();
        res.send(result);
        console.log("Get by ID successful");
      });
    });
  };