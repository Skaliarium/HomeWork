// Меню выполненное на jquery

$(function(){

$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);
        },
        function(){
            $(this).children('.sub-menu').slideUp(200);
        }
    );
});


// Работа с чекбоксами

$(document).ready(function() {
  $('select').niceSelect();
});


$("#button1").click(function(){
  var menuColor = $(".nice-select").val();
  if (menuColor == 1) {
    $('nav').css({
      "background-color": "#ffeb3b"
    });
    }  else {
        if (menuColor == 2) {
            $('nav').css({
              "background-color": "#e91e63"
            });
          }   else {
                if (menuColor == 3) {
                  $('nav').css({
                    "background-color": "#4caf50"
                              });
                }   else {
                        if (menuColor == 4) {
                          $('nav').css({
                              "background-color": "#2196f3"
                                      });
                                          };
                          };

                    };
              };
  });

  $("#button2").click(function(){
    var menuColor = $(".sub-menu-select").val();
    if (menuColor == 1) {
      $('nav li ul').css({
        "background-color": "#ffeb3b"
      });
      }  else {
          if (menuColor == 2) {
              $('nav li ul').css({
                "background-color": "#e91e63"
              });
            }   else {
                  if (menuColor == 3) {
                    $('nav li ul').css({
                      "background-color": "#4caf50"
                                });
                  }   else {
                          if (menuColor == 4) {
                            $('nav li ul').css({
                                "background-color": "#2196f3"
                                        });
                                            };
                            };

                      };
                };
    });

$("#button1default").click(function(){
    $('nav').css({
      "background-color": "#ff6464"
    });
});

$("#button2default").click(function(){
  $('nav li ul').css({
    "background-color": "#e14b4b"
  });
});

});
