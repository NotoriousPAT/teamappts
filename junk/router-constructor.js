var router = Backbone.Router.extend({
  routes: {
    "localhost:3000": "defaultRoute"
  }
});

var app.router = new router;
app.router.on('route:defaultRoute', function() {
  alert("something is working");

app.router.on('route:#/new', function() {
    alert("new router is working");

app.router.on('route:#/edit', function() {
    alert("edit router is working");

app.router.on('route:#/details', function() {
    alert("new router is working");

})
