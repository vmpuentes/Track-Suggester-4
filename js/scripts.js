$(document).ready(function() {
  $('form#trackSurvey').submit(function(event) {
  //  var userSelect = $("#trackSurvey").val();
  //  console.log("hello");s
//    var resultArr = [];

  var questionOne = parseInt($('#q1').val());
  var questionTwo = parseInt($('#q2').val());
  var questionThree = parseInt($('#q3').val());
  var questionFour = parseInt($('#q4').val());
  var questionFive = parseInt($('#q5').val());
  var suggestedLanguage = "";
  //event.preventDefault();
  if (questionOne === 1 && questionTwo === 1) {
    console.log(questionOne);
    suggestedLanguage = $('#javaCsharp').show();
  } else if (questionTwo === 2 && questionThree === 1) {
    suggestedLanguage = $('p#javascript').show()
  } else if (questionFour === 1 || questionThree === 2 || questionFive === 2) {
    suggestedLanguage = $('p#ruby').show();
  } else if (questionFour === 2) {
    suggestedLanguage = $('p#python').show();
  } else if (questionFour === 3) {
    suggestedLanguage = $('p#php').show();
  } else  {
    suggestedLanguage = $('p#javascript').show();
    console.log("hello");
    }
  });
});
