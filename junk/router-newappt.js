app.router.route("", function(){
  $("main").html($("#new").html());
  routes: {
    "#/new": ""
  }

  window.location.href = ("#/new");
})
