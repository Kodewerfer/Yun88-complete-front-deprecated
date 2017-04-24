;
(function ($, window) {
  var $cache = false
  var hSetter = function () {
    try {
      var $allHiCon = $cache ? $cache : $('.hiCon')
      if (!$cache) {
        $cache = $allHiCon
      }

      $allHiCon.each(function () {
        var $allWatch = $(this).find('.hiWatch')
        $allWatch.removeAttr('style')
        // debugger

        var heightes = 0
        $allWatch.each(function () {
          var h = $(this)[0].scrollHeight
          if (h > heightes) {
            heightes = h
          }
        })

        $allWatch.each(function () {
          $(this).height(heightes)
        })

      })

    } catch (error) {
      console.error("Con Watch Hi setter Error...:" + error)
    }
  }

  $(document).ready(function () {
    hSetter()
  })

  $(window).resize(function () {
    hSetter()
  })
})(window.jQuery, window)