var apiKey = require('./../.env').apiKey;
var allDoctors = []
function Doctor(doctor) {
  this.doctor = doctor
}

Doctor.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(results) {
     console.log(results);
     results.data.forEach(function(docData){
       allDoctors.push(docData)
     });
     console.log(allDoctors);
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;
