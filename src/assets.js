/**
 * Assets for all pages
 */

// jquery
window.$ = window.jQuery = require('jquery');


require('lazySize')

require('././_js/row-height-setter')
require('././_js/con-watch-height-setter')
require('./_js/parallax-scrolling')
require('./_js/devTestOnly')
require('./_js/headerRelated')

// import when docReady
$(document).ready(function () {

  // vminpoly
  if (!Array.prototype.filter) {
    Array.prototype.filter = function (fun /*, thisp*/ ) {
      var len = this.length;
      if (typeof fun != "function")
        throw new TypeError();

      var res = new Array();
      var thisp = arguments[1];
      for (var i = 0; i < len; i++) {
        if (i in this) {
          var val = this[i]; // in case fun mutates this
          if (fun.call(thisp, val, i, this))
            res.push(val);
        }
      }

      return res;
    };
  }

  var tokenizer = window['tokenize'] = require('vminpoly/tokenizer')
  require('vminpoly/parser')
  require('vminpoly/vminpoly')

  // flexibility, make older browser kinda support flexbox.
  var flexibility = require('flexibility')
  flexibility(document.documentElement)

})