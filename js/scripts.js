$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var answer_system = $("#question-system").val();
    var answer_end = $("input:radio[name=question-end]:checked").val();
    var answer_company = $("#question-company").val();
    var answer_criteria = $("#question-criteria").val();
    var answer_person = $("#question-person").val();
    
    $("#language-ruby").hide();
    $("#language-jscript").hide();
    $("#language-c").hide();
    $("#warning").hide();
            
    if (answer_system == "Choose..." || answer_company == "Choose..." || answer_criteria == "Choose..." || answer_person == "Choose..."){
      $('#warning').show();
    } else if (answer_system == "Desktop applications" && answer_criteria == "Language complexity"){
      $('#result').show();
      $('#language-ruby').show();
    } else if ((answer_company == "Microsoft" || answer_company == "Facebook") && answer_end == "front-end"){
      $('#result').show();
      $('#language-jscript').show();
    } else {
      $('#result').show();
      $('#language-c').show();
    }

    event.preventDefault();
    
  });
});