// DYNAMIC HEIGHT CHANGE

$('.home-banner').not('.no-resize').height($(window).height() + 43);

$(window).resize(function() {
 $('.home-banner').not('.no-resize').height($(window).height() + 43);
});

// DESKTOP NAV

$(".toggle-nav").click(function(){
   $(".nav-elements").fadeIn( 'fast');
   $(".close-nav").show();
   $(".toggle-nav").hide(); 
    
});

$(".close-nav").click(function(){
   $(".nav-elements").fadeOut( 'fast');
   $(".close-nav").hide();
   $(".toggle-nav").show(); 
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) {  
      $(".nav-elements").fadeOut( 'fast');
      $(".close-nav").hide();
      $(".toggle-nav").show();
    }
});

// SMOOTH SCROLL

$('a.scroll').click( function() {
    var pageid = $(this).attr('href');
    $('body').animate({scrollTop: $(pageid).offset().top}, 'slow');
    return false;
});

// PAUSING VIDEO ON MODAL CLOSE

$('a.modal-close').click( function() {
    $('video')[0].pause();
});

// ELIMINATING TOUCH DELAY

document.addEventListener("touchstart", function(){}, true);

// CONTENTEDITABLE (for content dev)
// $('*').attr('contenteditable','true');

// MOBILE MENU

/*

var menuRight = $( '.mbl-menu' ),
        body = document.body;

$('.toggle-nav-mbl').click( function() {
        menuRight.toggleClass('active');
});

$('.close-nav-mbl').click( function() {
        menuRight.toggleClass('active');
});

*/

// MODAL

$(document).ready(function() {
    $('.md-inline').magnificPopup({
        removalDelay: 300,
        mainClass: 'mfp-fade',
        type:'inline',
        midClick: true,
    });
});