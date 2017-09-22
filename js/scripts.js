$(document).ready(function() {
  $('form#trackSurvey').submit(function(event) {
    var questionOne = parseInt($('#q1').val());
    var questionTwo = parseInt($('#q2').val());
    var questionThree = parseInt($('#q3').val());
    var questionFour = parseInt($('#q4').val());
    var questionFive = parseInt($('#q5').val());
  if (questionOne === 1 && questionTwo === 1) {
    $('#javaCsharp').show();
    $('#generalResponse').show();
  } else if (questionTwo === 2 && questionThree === 1) {
    $('#javascript').show()
    $('#css').show();
    $('#generalResponse').show();
  } else if (questionFour === 1 && questionThree === 2 || questionFive === 2) {
    $('#ruby').show();
    $('#css').show();
    $('#generalResponse').show();
  } else if (questionFour === 2) {
    $('#python').show();
    $('#css').show();
    $('#generalResponse').show();
  } else if (questionFour === 3) {
    $('#php').show();
    $('#css').show();
    $('#generalResponse').show();
  } else  {
    $('#javascript').show();
    $('#python').show();
    $('#css').show();
    $('#generalResponse').show();
    }
    event.preventDefault();
  });
});
