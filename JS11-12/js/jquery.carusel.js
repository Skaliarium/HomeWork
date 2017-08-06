(function ($) {

  $.fn.carusel = function (options) {
    var leftUIEl = $(".carousel-arrow-left");
    var rightUIEl = $(".carousel-arrow-right");
    var elementsList = $(".carousel-list");



    var pixelsOffset = 175;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 4) * pixelsOffset);
    var maximumOffset = 0;


    leftUIEl.click(function() {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 175;
            elementsList.animate({ left : currentLeftValue + "px"}, 650);
        }
    });

    rightUIEl.click(function() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 175;
            elementsList.animate({ left : currentLeftValue + "px"}, 650);
        }
    });



  };

})(jQuery);
