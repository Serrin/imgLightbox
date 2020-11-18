/**
 * imglightbox
 * @version 1.0.5
 * @author Ferenc Czigler <serrin.salamander@gmail.com>
 * @see https://github.com/Serrin/imgLightbox
 *
 * <link href="imglightbox.css" rel="stylesheet" type="text/css">
 * <script src="imglightbox.js"></script>
 */

var imgLightbox = (function(){
  "use strict";
  return {
    config: {
      version: "1.0.5",
      download: false,
      newwindow: false
    },
    open: function (filename, download, newwindow) {
      if (typeof download !== "boolean") { download = this.config.download; }
      if (typeof newwindow !== "boolean") { newwindow = this.config.newwindow; }
      var els = document.getElementById("imgLightbox").style;
      els.backgroundImage = "url('"+filename+"')";
      els.display = "block";
      var dlbtn = document.getElementById("imgLightbox-button-download");
      var nwbtn = document.getElementById("imgLightbox-button-newwindow");
      if (download) {
        dlbtn.style.display = "inline-block";
        dlbtn.href = filename;
        dlbtn.target = "_blank";
        dlbtn.download = filename;
      } else {
        dlbtn.style.display = "none";
      }
      if (newwindow) {
        nwbtn.style.display = "inline-block";
        nwbtn.href = filename;
        nwbtn.target = "_blank";
      } else {
        nwbtn.style.display = "none";
      }
    },
    close: function () {
      document.getElementById("imgLightbox").style.display="none";
    }
  };
}());
