// повесить обработчик событий
// при клике создавать сам хтмл и вставлять дом


(function ($) {

  $.fn.modalimg = function (options) {

    var defaults = {
      overlayColor: 'black',
      font: 'Arial'
    };

    var settings = $.extend (defaults, options);

    // console.log(defaults);
    // console.log(options);


    var $link = this;
    var $body = $('body');

    var $modal;
    var $overlay;

    function showModal(e) {

      e.preventDefault();
      var href = $link.attr('href');
      $modal = $('<div class="modalimg"><img src="' + href + '"></div>');
      $overlay = $('<div class="modalimg-overlay"></div>');
      $overlay.css({
        'background-color': settings.overlayColor
      });
      // alert('test')
      // console.log($modal);
      $overlay.one('click', hideModal);
      $body.append($overlay);
      $body.append($modal);

    };

    function hideModal () {
      $modal.remove();
      $overlay.remove();
    }

    $link.on('click', showModal);



    return this;

  };

})(jQuery);
