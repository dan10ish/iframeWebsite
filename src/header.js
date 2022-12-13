import $ from "jquery";

$(document).ready(function () {
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 49) {
      $("body").addClass("header-fixed");
    } else {
      $("body").removeClass("header-fixed");
    }
  });
});
