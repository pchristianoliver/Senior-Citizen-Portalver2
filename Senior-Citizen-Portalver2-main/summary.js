function reviewForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var middleName = document.getElementById("middleName").value;
  
    var reviewOutput = document.getElementById("review-output");
    reviewOutput.innerHTML = "";

  
    reviewOutput.innerHTML = "Name: " + firstName + "<br>";
    reviewOutput.innerHTML += "Last Name: " + lastName + "<br>";
    reviewOutput.innerHTML += "Middle Name: " + middleName;
  }
  