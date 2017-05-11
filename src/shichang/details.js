
var plyr = require('plyr')
require('plyr/src/less/plyr.less')

  ; (function () {

    $(document).ready(function () {

      plyr.setup();
 
      $('.item-bar').click(function () {
        if ($('.nav').css('display') == 'none') {
          $('.nav').css('display', 'block')
        } else {
          $('.nav').css('display', 'none')
        }
      })

      $('.p-details').show()
      $('.p-price').hide()
      $('.p-cases').hide()
      $('.p-resource').hide()
      $('.common-problem').hide()
      $('.pro-details').addClass('active')
      $('.pro-details').children('span').addClass('active2')
      $('.pro-details').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
        $(this).children('span').addClass('active2')
        $(this).siblings().children('span').removeClass('active2')
        $('.p-details').show().siblings().not('.tab').hide()
      })
      $('.pro-price').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
        $(this).children('span').addClass('active2')
        $(this).siblings().children('span').removeClass('active2')
        $('.p-price').show().siblings().not('.tab').hide()
      })
      $('.pro-cases').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
        $(this).children('span').addClass('active2')
        $(this).siblings().children('span').removeClass('active2')
        $('.p-cases').show().siblings().not('.tab').hide()
      })
      $('.resource-center').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
        $(this).children('span').addClass('active2')
        $(this).siblings().children('span').removeClass('active2')
        $('.p-resource').show().siblings().not('.tab').hide()
      })
      $('.com-problem').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
        $(this).children('span').addClass('active2')
        $(this).siblings().children('span').removeClass('active2')
        $('.common-problem').show().siblings().not('.tab').hide()
      })
    })

  })()
