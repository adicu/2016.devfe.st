$(document).ready(function() {
  applyNavScroll();
  var width = $(window).width();

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
      $('html,body').animate({
        scrollTop: dest,
      }, 2000, 'swing');
      hashTagActive = this.hash;

    }
  });

  /* Every time the window is scrolled ... */
  $(window).scroll(function() {

    var $coolBody = $(document.body);
    var bodyHeight = $coolBody.height();

    $('#globe').css({
      transform: 'translateX(+50%) translateY(+50%) rotate(' + ($coolBody.scrollTop() / bodyHeight * 360) + 'deg)',
    });

    // console.log($cool_body.scrollTop());
    if ((100 * (($coolBody.scrollTop() / bodyHeight) - 1) + 25) > 0) {
      $('#airplane').css({
        right: 100 * (($coolBody.scrollTop() / bodyHeight) - 1) + 25 + '%',
      });
    }

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

  $('#nav_sign').click(function() {
    showEmail();
    $('html, body').animate({
      scrollTop: $('#top').offset().top,
    }, 1000);
  });

  $('#main').click(function() {
    $('html, body').animate({
      scrollTop: $('#landing').offset().top,
    }, 1000);
  });

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
