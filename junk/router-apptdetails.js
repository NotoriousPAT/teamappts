app.router.route("", function() {
  routes: {
    "#/details/:id": "getPostId"
  }
  app.router.route.on('route:getPostId', function(id) {
    alert("Get post number " + id);
  });
  app.router.route.on('route:defaultRoute', function() {
    alert("this is not where you wanted to be");
  });

  $("main").html($("#detail").html());


  // window.location.href = ("#/details");
})
