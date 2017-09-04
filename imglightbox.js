/**
 * imglightbox.js
 * @version 1.0.0
 * @author Ferenc Czigler <serrin@t-email.hu>
 * @see https://github.com/Serrin/
 *
 * <link href="imglightbox.css" rel="stylesheet" type="text/css">
 * <script src="imglightbox.js"></script>
 */

var imgLightbox = (function(){
  "use strict";
  return {
    open: function (filename) {
      var els = document.getElementById("imgLightbox").style;
      els.backgroundImage = "url('"+filename+"')";
      els.display="block";
    },
    close: function () {
      document.getElementById("imgLightbox").style.display="none";
    }
  };
}());
