$(document).ready(function () {
  //Preloader
  preloaderFadeOutTime = 900;
  function hidePreloader() {
    var preloader = $(".spinner-wrapper");
    preloader.fadeOut(preloaderFadeOutTime);
  }
  hidePreloader();
});
