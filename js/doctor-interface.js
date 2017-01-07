var Doctor = require('./../js/doctor.js').doctorModule;
$(document).ready(function() {
  var foundDoctors = new Doctor();
  allDoctors = [];
  $("#ailmentForm").submit(function(event){
    event.preventDefault();
    var ailment = $('#ailmentInput').val();
    foundDoctors.getDoctors(ailment);
  });
  $("#show").click(function(event){
    event.preventDefault();
    $("=")
    foundDoctors.displayDoctors();
  })
});
