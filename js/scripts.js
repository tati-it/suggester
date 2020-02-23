$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var system = $("#question-system").val();
    var end = $("input:radio[name=question-end]:checked").val();
    var company = $("#question-company").val();
    var criteria = $("#question-criteria").val();
    var person = $("#question-person").val();
    
    $("#language-ruby").hide();
    $("#language-jscript").hide();
    $("#language-c").hide();

    $('#result').show();
  


    if (system =="Desktop applications"&&criteria=="Language complexity"){
      $('#language-ruby').show();
       } else if ((company=="Microsoft"||company=="Facebook")&&end=="front-end"){
        $('#language-jscript').show();
       } else {
        $('#language-c').show();
       }
    event.preventDefault();
    
  });
});