var apiKey = require('./../.env').apiKey;
var allDoctors = [];
function Doctor(firstName, lastName, title) {
  this.listDoctors = allDoctors;
  this.FirstName = lastName;
  this.LastName = firstName;
  this.title = title;
}

Doctor.prototype.displayDoctors = function () {
$("#doctorOutput").html("dasdfaf");
console.log(this.listDoctors.length)
};



Doctor.prototype.getDoctors = function(medicalIssue) {
  allDoctors = []
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(results) {
     console.log(results);
     results.data.forEach(function(docData){
       var newDoctor = new Doctor(docData.profile.first_name, docData.profile.last_name, docData.profile.title);
       allDoctors.push(docData.profile.first);
       console.log(allDoctors.length);
     });
     if (allDoctors.length === 0) {
       $("#doctorOutput").text( "no doctors found!");
     } else {
  $("#doctorOutput").text(allDoctors.length + " doctors found!");
  }
})
   .fail(function(error){
      console.log("fail");
  });
};




exports.doctorModule = Doctor;
