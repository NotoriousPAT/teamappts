var app = {};

var data = [];

  var Router = Backbone.Router.extend({
  routes:{
         '':'home',
         'login':'login',
         'new':'new',
         'detail/:id':'detail',
         'edit/:id':'edit',
       },

        login: function(){
         $('.main-content').html($('#login-page').html());
         $('.log-in').on('submit', function(e) {
           e.preventDefault();
           window.location.hash = '';

         });
       },

      home: function(){
         //myHomeFunction()

         //Function that pulls in template "all-appts" into the HTML and passes it variable M
         var compiled = _.template($('#all-appts').html(), {variable: 'm'});
         //Takes the complied array and displays it in the Main Content div
         $('.main-content').html(compiled(data));
        },

      new: function(){
        //displays form
        $('.main-content').html($('#create-appt').html());
        $(".date").pickadate({
          format: "mm/dd/yyyy"
        });
        $(".time").pickatime({
          interval: 30,
          format: 'h:i A',
        });
        $('.new-appt').on('submit', function (e) {
          e.preventDefault();

          var appt = {};

          appt.title = $('.title').val();
          appt.date = $('.date').val();
          appt.time = $('.time').val();
          appt.street = $('.street').val();
          appt.city = $('.city').val();
          appt.state = $('.state').val();

          data.push(appt);
          console.log (data);

          // this.navigate('#all-appts', true);
          window.location.hash = "";
          // app.instance.goto(view);

        });
        },

      detail: function(id){
        // $('.main-content').html($('#appt-details').html());

        var compiled = _.template($('#appt-details').html(), {variable: 'm'});
        //Takes the complied array and displays it in the Main Content div
        $('.main-content').html(compiled(data));

      },

      edit: function(id){
        $('.main-content').html($('#create-appt').html());
                // alert("Put templates Here??" + id);
          },
        });


var app_router = new Router();
  // app_router.on("route:new", function(){
  //   alert("Put templates Here??");
  // });

Backbone.history.start();


    load: function () {
      appointments = JSON.parse(localStorage.getItem('appts')) || [];
    },

    save: function () {
      localStorage.setItem('appts', JSON.stringify(appointments));
    },
