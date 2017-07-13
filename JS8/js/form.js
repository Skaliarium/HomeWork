$(function(){

var $flag = 0; //0 - tooltips off; 1 - tooltips on


  $('.my_input').hover(function(){
      if ($flag == '0') {
          $(this).next().fadeToggle();
      }
  });



});
