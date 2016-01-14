$(document).ready(function() {
  applyNavScroll();
  var width = $(window).width();

  // Move Page
  var hashTagActive = '';
    $('.scroll').click(function (event) {
        var target = this.hash;
        var active_target = target + "-link";
        // $(active_target).css({background: "white"});

        if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
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
                scrollTop: dest
            }, 2000, 'swing');
            hashTagActive = this.hash;

        }
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
