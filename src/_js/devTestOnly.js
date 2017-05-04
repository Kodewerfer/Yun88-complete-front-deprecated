;
(function ($, window) {

  $(document).ready(function () {
    var $wrapper = $('.page-wrap');
    if (!$wrapper.hasClass('devHead')) {
      return
    }
    var $head = require('../../html/_header_footer_/header.html')
    var $foot = require('../../html/_header_footer_/footer.html')
    $wrapper.before($head);
    $wrapper.after($foot);

  });
})(window.jQuery, window);