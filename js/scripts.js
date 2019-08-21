$(document).ready(function(){
  $("form#survey").submit(function(event){
    event.preventDefault();
    var q1 = parseInt($("#question-one").val());
    var q2 = parseInt($("#question-two").val());
    var q3 = parseInt($("#question-three").val());
    var q4 = parseInt($("#question-four").val());
    var q5 = parseInt($("#question-five").val());
    var q6 = parseInt($("#question-six").val());

    var score = q1 + q2 + q3 + q4 + q5 + q6;

    if (score <= 2) {
      $('#result-one').show();
    } else if (score === 3) {
      $('#result-two').show();
    } else if ( score >= 4)
      $('#result-three').show();
  });
});

// var score = function parseInt(value1, value2, value3, value4, value5, value6);

