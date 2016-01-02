
$(document).ready(function() {
  var width = $(window).width();

  // Move Page
  $('#moreinfo').click(function() {
    $('html, body').animate({
      scrollTop: $('#info').offset().top,
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
      $('.border-right-2').css({'border-color': '#F9C22E'});
      $('#land_desc').fadeIn();
      $('#gif2015').fadeIn();
  });
  }
});

function showEmail() {
  console.log('holla');
  $('#email').fadeIn();
  $('#signup').hide();
  $('#submit').show();
}

function submitEmail() {
  var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
  var potentialEmail = $('#email').val();
  if (testEmail.test(potentialEmail)) {
    console.log('success!');
    $('#submit').hide();
    $('#email').hide();
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
