$(document).ready(function() {
  applyNavScroll();
  var width = $(window).width();
  $(window).resize(applyNavScroll);

  $('.track-box').click(function() {
  window.location = $(this).find('a').attr('href');
  return false;
});

  // Move Page
  var hashTagActive = '';
  $('.scroll').click(function(event) {
    var target = this.hash;
    var activeTarget = target + '-link';

    // $(active_target).css({background: 'white'});

    if (hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
      event.preventDefault();

      //calculate destination place
      var dest = 0;
      if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
        dest = $(document).height() - $(window).height();
      } else {
        dest = $(this.hash).offset().top;
      }

      //go to destination
      var SCROLL_TIME = 1000;
      $('html,body').animate({
        scrollTop: dest,
      }, SCROLL_TIME, 'swing');
      hashTagActive = this.hash;
    }
  });

  /* Every time the window is scrolled ... */
  $(window).scroll(function() {
    $('#globe').css({
      transform: 'translateX(+50%) translateY(+50%) rotate(' + ($(document.body).scrollTop() / $(document.body).height() * 360) + 'deg)',
    });

    /* Check the location of each desired element */
    $('.hideme').each(function(i) {
      var bottomObject = $(this).offset().top + $(this).outerHeight();
      var bottomWindow = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if (bottomWindow > bottomObject) {

        $(this).animate({
          opacity: '1',
        }, 500);

      }

    });

  });

  $('#moreinfo').click(function() {
    $('html, body').animate({
      scrollTop: $('#info').offset().top,
    }, 1000);
  });

  $('#main').click(function() {
    $('html, body').animate({
      scrollTop: $('#landing').offset().top,
    }, 1000);
  });

});

function showEmail() {
  $('#success').hide();
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
  var infoHeight = $('#schedule').offset().top;
  $(window).scroll(function() {
    if ($(this).scrollTop() > infoHeight) {
      $('.nav').css({
        position: 'fixed',
      });
    } else {
      $('.nav').css({
        position: 'absolute',
      });
    }
  });
}

function showNav() {
  $('#exit').show();
  $('.unhide-nav').show();
  $('#menu').hide();
}

function hideNav() {
  $('.unhide-nav').hide();
  $('#menu').show();
  $('#exit').hide();
}

function showPopup() {
  $('.popup-content').show();
  $('#welcome-intro').hide();
}

function hidePopup() {
  $('.popup-content').hide();
  var video = $('#playerid').attr('src');
  $('#playerid').attr('src', '');
  $('#playerid').attr('src', video);
  $('#welcome-intro').show();
}

// function schedule(param) {
//   var somestring = ';
//   somestring = param;
//   $('#day-1').html() = $(somestring);
// }
