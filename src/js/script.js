
$(document).ready(function() {
  applyNavScroll();
  var width = $(window).width();

  // Move Page
  $('#moreinfo').click(function() {
    $('html, body').animate({
      scrollTop: $('#info').offset().top,
    }, 1000);
  });

  $('#nav_sign').click(function() {
    showEmail();
    $('html, body').animate({
      scrollTop: $('#landing').offset().top,
    }, 1000);
  });

  $('#schedule-link').click(function() {
    $('html, body').animate({
      scrollTop: $('#schedule').offset().top,
    }, 1000);
  });

  $('#main').click(function() {
    $('html, body').animate({
      scrollTop: $('#landing').offset().top,
    }, 1000);
  });

  if (width <= 970) {
    $('.border-right-2').css({'border-color': 'rgba(0, 0, 0, 0)'});
    $('.img_contain').css({'width': '100%'});
    $('#land_desc').fadeIn();
      $('#gif2015').fadeIn();
  } else {
    $('.img_contain').animate({width: '95%'}, 1500);

  $('.border-right-2').animate({
    right: '10%'
  }, 1500, function() {
      $('.border-right-2').css({'border-color': 'rgba(0, 0, 0, 0)'});
      $('#land_desc').fadeIn();
      $('#gif2015').fadeIn();
  });
  }
});

function showEmail() {
  $('#mce-EMAIL').fadeIn();
  $('#signup').hide();
  $('#submit').show();
}

function submitEmail() {
  var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
  var potentialEmail = $('#mce-EMAIL').val();
  if (testEmail.test(potentialEmail)) {
    $('form[name=mc-embedded-subscribe-form]').submit();
    $('#submit').hide();
    $('#mce-EMAIL').hide();
    $('#success').show();
    $('#success').fadeOut(2000);
  } else {
    alert('Incorrect Email. Please Try Again.');
  }
}

function showVideo() {
  $('#viewvideo').hide();
  $('#gif2015').hide();
  $('#vid2015').fadeIn();

  $('.transparent').click(function() {
    $('#viewvideo').show();
    $('#gif2015').show();
    $('#vid2015').fadeOut();
  });
}

function applyNavScroll() {
  var infoHeight = $('#info').offset().top;
  $(window).scroll(function() {
    if ($(this).scrollTop() > infoHeight){
        $('.nav').css({'position': 'fixed'});
    }
    else {
        $('.nav').css({'position': 'absolute'});
    }
});
}

function showNav() {
  $("#exit").show();
  $(".unhide-nav").show();
  $("#menu").hide();
}

function hideNav() {
  $(".unhide-nav").hide();
  $("#menu").show();
  $("#exit").hide();
}
