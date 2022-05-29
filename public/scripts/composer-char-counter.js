
$(function() {
  let maxlength = 140;
  $('textarea').keyup(function() {
    let currentlength = $(this).val().length;
    let remaining = maxlength - currentlength;
    if (remaining <= 0) {
      $(this).parent().children('div').children('.counter').css('color', '#FF0000');
      $(this).parent().children('div').children('.counter').text(remaining);
    } else if (remaining > 0) {
      $(this).parent().children('div').children('.counter').css('color', '#545149');
      $(this).parent().children('div').children('.counter').text(remaining);
    }
  });
});