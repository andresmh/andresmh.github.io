$(document).ready(function () {
  // responsive mobile menu
  $('.mob-menu-icon').click(function () {
    $(this).toggleClass('open');
    $('.mobile-menu').toggleClass('notShow');
    $('.mobile-menu').toggleClass('show');
  });
  // close menu on click
  $('.mobile-menu li a').click(function () {
    $('.mob-menu-icon').removeClass('open');
    $('.mobile-menu').toggleClass('notShow');
    $('.mobile-menu').toggleClass('show');
  })
});