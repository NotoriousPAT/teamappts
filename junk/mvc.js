// app.js
// namespace contain the whole app
var app={};

// init.js
// initialize backbone
$(function(){
  'use strict';
  Backbone.history.start();
});

// router.js
// create router constructor


app.router= new Backbone.Router.extend();


// create router for each page of app
app.router.route("", function(){
  $("main").html($("#html-script-tag1").html());
})


app.router.route("", function(){
  $("main").html($("#html-script-tag2").html());
})

app.router.route("", function(){
  $("main").html($("#html-script-tag3").html());
})



// controller
(function(){
  app.router.route("", )
})






// models


// views



// controllers
