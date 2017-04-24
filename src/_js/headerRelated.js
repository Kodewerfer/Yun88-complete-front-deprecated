(function ($, window) {

  $(document).on('change', '#mobile-ck', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('no-scroll');      
    }else{
      $('body').removeClass('no-scroll');      
    }
  })

})(window.jQuery, window);