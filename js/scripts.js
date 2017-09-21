$(document).ready(function() {
  $('form#trackSurvey').submit(function(event) {
  //  var userSelect = $("#trackSurvey").val();
  //  console.log("hello");s
//    var resultArr = [];
  var suggestedLanguage = "";
  var questionOne = $('#q1').val().parseInt();
  var questionTwo = $('#q2').val().parseInt();
  var questionThree = $('#q3').val().parseInt();
  var questionFour = $('#q4').val().parseInt();
  var questionFive = $('#q5').val().parseInt();

  //event.preventDefault();
  if (questionOne === 1 && questionTwo === 1) {
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
