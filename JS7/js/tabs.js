$(function(){



  // Функция для работы с табами
      $(".tab").click(function(){

          var clicked_tab = $(this).index(); //to find correct tab and tab content
          $(".tab").each(function() {
              if ($(this).index() === clicked_tab) {
                  $(this).addClass("active");
              } else {
                  $(this).removeClass("active");
              }
          });
          $(".tab-pane").each(function() {
              if ($(this).index() === clicked_tab) {
                  $(this).addClass("in-active");
              } else {
                  $(this).removeClass("in-active");
              }
          });
      });







});
