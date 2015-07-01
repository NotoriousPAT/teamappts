var Users= Backbone.Model.extend({
  // If you return a string from the validate function,
  // Backbone will throw an error
  validate: function( attributes ){
    if( attributes.age < 0 && attributes.name != "Dr Manhatten" ){
      return "You can't be negative years old";
    }
  },
  initialize: function(){
    alert("Welcome to this world");
    this.bind("error", function(model, error){
      // We have received an error, log it, alert it or forget it :)
      alert( error );
    });
  }
});

var human = new Human;
human.set({ name: "Mary Poppins", age: -1 });
// Will trigger an alert outputting the error

var human = new Human;
human.set({ name: "Dr Manhatten", age: -1 });
// God have mercy on our souls
