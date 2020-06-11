AOS.init({
  disable: "mobile",
  offset: 150,
  once: true,
  duration: 1000,
});
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
