/**
 * imglightbox
 * @version 1.0.3
 * @author Ferenc Czigler <serrin.salamander@gmail.com>
 * @see https://github.com/Serrin/
 *
 * <link href="imglightbox.css" rel="stylesheet" type="text/css">
 * <script src="imglightbox.js"></script>
 */

var imgLightbox = (function(){
  "use strict";
  return {
    config: {
      version: "1.0.3",
      download: false
    },
    open: function (filename, download) {
      if (typeof download !== "boolean") { download = this.config.download; }
      var els = document.getElementById("imgLightbox").style;
      els.backgroundImage = "url('"+filename+"')";
      els.display="block";
      var dlbtn = document.getElementById("imgLightbox-button-download");
      if (download) {
        dlbtn.style.display = "inline-block";
        dlbtn.href = filename;
        dlbtn.download = filename;
      } else {
        dlbtn.style.display = "none";
      }
    },
    close: function () {
      document.getElementById("imgLightbox").style.display="none";
    }
  };
}());
