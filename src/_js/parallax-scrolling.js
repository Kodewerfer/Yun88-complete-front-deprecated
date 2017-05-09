(function () {

  $(document).ready(function () {

    var $parallax = $(".parallax"),
      speed = 0.4;

    window.onscroll = function () {
      $parallax.each(function () {
        var windowYOffset = window.pageYOffset,
          elBackgrounPos = (windowYOffset * speed) + "px";
        $(this).css('background-position-y', elBackgrounPos)
      });
 
    };

  })

})();