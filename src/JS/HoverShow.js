$(document).ready(function () {
  $("a.nav-link").hover(function () {
    $(this).siblings("dropdown-menu").addClass("show-time");
  }, function () {
    $(this).siblings("dropdown-menu").removeClass("show-time");
  });
});

// http: //jsfiddle.net/P3Ew6/
