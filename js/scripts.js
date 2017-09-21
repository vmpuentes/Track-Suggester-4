$(document).ready(function() {
  $('#trackSurvey').submit(function(event) {
  //  var userSelect = $("#trackSurvey").val();
  //  console.log("hello");s
//    var resultArr = [];
  var suggestedLanguage;
  var questionOne = $('#q1').val().parseInt();
  var questionTwo = $('#q2').val().parseInt();
  var questionThree = $('#q3').val().parseInt();
  var questionFour = $('#q4').val().parseInt();
  var questionFive = $('#q5').val().parseInt();

  event.preventDefault();
  if ($('#q1').val() === 1 && $('#q2').val() === 1) {
    $("#javaCsharp").show();
  } else if ($('#q4').val() === 1 || ($('#q3').val() === 2 || ($('#q5').val() === 2)
    $('#ruby').show();
  } else if ($('#q4').val(); === 2)
    $('#python').show();
  } else if ($('#q4').val(); === 3)
    $('#php').show();
  } else  {
    $('#javascript').show();
    }
  });
});
