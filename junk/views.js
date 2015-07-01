var SearchView = Backbone.View.extend({
//   initialize: function(){
//     this.render();
//   },
//   render: function(){
//     //Pass variables in using Underscore.js Template
//     var variables = { search_label: "My Search" };
//     // Compile the template using underscore
//     var template = _.template( $("#search_template").html(), variables );
//     // Load the compiled HTML into the Backbone "el"
//     this.$el.html( template );
//   },
//   events: {
//     "click input[type=button]": "doSearch"
//   },
//   doSearch: function( event ){
//     // Button clicked, you can access the element that was clicked with event.currentTarget
//     alert( "Search for " + $("#search_input").val() );
//   }
// });
//
// var search_view = new SearchView({ el: $("#search_container") });
//


  var ListView = Backbone.View.extend({
    el: $('body'), // attaches `this.el` to an existing element.
    // `initialize()`: Automatically called upon instantiation. Where you make all types of bindings, _excluding_ UI events, such as clicks, etc.
    initialize: function(){
      _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods

       this.render(); // not all views are self-rendering. This one is.
    },
    // `render()`: Function in charge of rendering the entire view in `this.el`. Needs to be manually called by the user.
    render: function(){

      $('div").html()
      $(this.el).append("<ul> <li>hello world</li> </ul>");
    }
  });
