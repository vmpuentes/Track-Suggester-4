$(document).ready(function() {
  $("form#trackSurvey").submit(function(event) {
    var userSelect = parseInt($("#trackSurvey").val());
    var resultArr = [];
  event.preventDefault();
  if ($('#q1').val() === 1 && $('#q2').val() === 1) {
    $("#javaCsharp").show();
  } else if ($('#q4').val() === 1 || ($('#q3').val() === 2 || ($('#q5').val() === 2)
    $("#ruby").show();;
  } else if ($('#q4').val(); === 2)
    $('#python').show();
  } else if ($('#q4').val(); === 3)
    $('#php').show();
  } else  {
    $('#javascript').show();
    }
  });
});
