var apiKey = require('./../.env').apiKey;
allDoctors = [];
function Doctor(firstName, lastName, title) {
  this.firstName = lastName;
  this.lastName = firstName;
  this.title = title;
}

Doctor.prototype.getDoctors = function(medicalIssue) {
  allDoctors = [];
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(results) {
     results.data.forEach(function(docData){
       var newDoctor = new Doctor(docData.profile.first_name, docData.profile.last_name, docData.profile.title);
       allDoctors.push(newDoctor);
     });
     if (allDoctors.length === 0) {
       $("#doctorOutput").text( "no doctors found!");
     } else {
  $("#doctorOutput").text(allDoctors.length + " doctors found nearby!");
  $("#show").toggleClass('hidden');
  console.log(results);
  }
})
   .fail(function(error){
      console.log("fail");
  });
    return allDoctors;
};
Doctor.prototype.displayDoctors = function () {
allDoctors.forEach(function(doctor){
  $("#listofDocs").append("<li>" + doctor.firstName + " " + doctor.lastName + " " + doctor.title);
});
};


exports.doctorModule = Doctor;
