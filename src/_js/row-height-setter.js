;
(function ($, window) {
  var $cache = false;
  var hSetter = function () {
    try {
      var $allRows = $cache ? $cache : $('.row[autoHi]')
      if (!$cache) {
        $cache = $allRows;
      }

      $allRows.each(function () {
        var $allCols = $(this).find('>div')
        $allCols.removeAttr('style')
        // debugger

        var heightes = 0
        $allCols.each(function () {
          var h = $(this)[0].scrollHeight
          if (h > heightes) {
            heightes = h
          }
        })
        $allCols.each(function () {
          $(this).height(heightes)
        })
        // remove the cloak
        $(this).removeClass('cloak-from-mishap')

      })

    } catch (error) {
      console.error("HiSetter Error...:" + error)
    }
  }

  $(document).ready(function () {
    hSetter()
  })

  $(window).resize(function () {
    hSetter()
  })
})(window.jQuery, window)