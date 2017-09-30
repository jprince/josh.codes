$(document).ready(function() {
  $('.new_contact_form .row input').on('keyup', _.debounce(validate, 400));
  $('.new_contact_form .row textarea').on('keyup', _.debounce(validate, 400));

  $('.modal').modal();
  $('.tooltipped').tooltip();
});

function validate() {
  var inputsWithValues = 0;
  var textAreasWithValues = 0;

  var inputs = $(".new_contact_form .row input:not([type='submit'])");
  var textAreas = $('.new_contact_form .row textarea');

  inputs.each(function(e) {
    if ($(this).val()) {
      inputsWithValues += 1;
    }
  });

  textAreas.each(function(e) {
    if ($(this).val()) {
      textAreasWithValues += 1;
    }
  });

  if (inputsWithValues == inputs.length && textAreasWithValues == textAreas.length) {
    $('.new_contact_form input[type=submit]').prop('disabled', false);
  } else {
    $('.new_contact_form input[type=submit]').prop('disabled', true);
  }
}
