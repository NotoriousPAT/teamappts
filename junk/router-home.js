app.router.route("", function(){
  routes: {
    "#/home": "home"
  }
$("main").html($("#home").html());


// window.location.href = ("#/home");
})
