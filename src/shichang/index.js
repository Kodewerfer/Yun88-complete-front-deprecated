  require('slick/slick.css');
  require('slick/slick-theme.css');
  require('slick/slick.js');

  $(document).ready(function () {
    $('.desc-roller').slick({
      fade: true,
      speed: 200
    });


    var currentIndex = 0;
    $('.img-roller .blocky').on('click', function (ev) {
      $('.img-roller .blocky').removeClass('active')
      $(this).addClass('active')
      var theGoto = $(this).data('desc-goto')
      currentIndex = theGoto
      $('.desc-roller').slick('slickGoTo', theGoto)
    })

    $('.img-roller .blocky').first().trigger('click')

    $('.fa-arrow-right').on('click', function () {
      if (currentIndex + 1 >= 4) {
        return
      }
      $('.img-roller .blocky[data-desc-goto=' + (currentIndex + 1) + ']').trigger('click')
    })

    $('.fa-arrow-left').on('click', function () {
      if (currentIndex - 1 < 0) {
        return
      }
      $('.img-roller .blocky[data-desc-goto=' + (currentIndex - 1) + ']').trigger('click')
    })
  })