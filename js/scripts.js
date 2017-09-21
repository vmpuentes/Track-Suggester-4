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
  if (questionOne === 1 && questionTwo === 1) {
    return $('#javaCsharp').show();
  } else if (questionOne === 2 &&)
  } else if (questionFour === 1 || (questionThree === 2 || (questionFive === 2)
    return $('#ruby').show());
  } else if (questionFour === 2)
    return $('#python').show();
  } else if (questionFour === 3)
    return $('#php').show();
  } else  {
    return $('#javascript').show();
    }
  });
});
