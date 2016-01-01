
$(document).ready(function() {
  console.log('hello world');
  $('#moreinfo').click(function() {
    console.log('yass');
    $('html, body').animate({
      scrollTop: $('#page-2').offset().top,
    }, 1500);
  });
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
