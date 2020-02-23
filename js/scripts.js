$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var system = $("#system").val();
    var end = $("input:radio[name=end]:checked").val();
    var company = $("#company").val();
    var criteria = $("#criteria").val();
    var person = $("#person").val();
    $('#result').show();
    
    if (system =="Desktop applications"&&criteria=="Language complexity"){
      $('#ruby').show();
       } else if ((company=="Microsoft"||company=="Facebook")&&end=="front-end"){
        $('#jscript').show();
       } else {
        $('#c').show();
       }
    event.preventDefault();
  });
});