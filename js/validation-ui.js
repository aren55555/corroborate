function startValidation() {
  var greenClass =  "text-success"
  var redClass =    "text-danger";
  var yellowClass = "text-warning";

  // Clear Existing Results
  var result = document.querySelector('#result');
  result.innerHTML = '';

  // Parse the input
  var obj;
  try{
    obj = JSON.parse(document.querySelector('#input #json').value);
  }catch(e){
    var jsonParseError = document.createElement('p');
    jsonParseError.className = "text-danger";
    jsonParseError.innerHTML = "Could not parse JSON";
    result.appendChild(jsonParseError);
    return;
  }

  // Perform Validation
  var validationResults = window.jsonapivalidator(obj);

  if (validationResults.Valid()) {
    var successHeading = document.createElement('h3');
    successHeading.innerHTML = "No Errors!";
    successHeading.className = greenClass;
    return;
  }

  // Write out the Errors
  var errors = validationResults.Errors();
  if (errors.length > 0) {
    var errorsHeading = document.createElement('h3');
    errorsHeading.innerHTML = "Errors:";
    errorsHeading.className = redClass;
    result.appendChild(errorsHeading);

    var errorsContent = document.createElement('ul');
    for (i = 0; i < errors.length; i++) {
      var li = document.createElement('li');
      li.className = redClass;
      li.innerHTML = errors[i];
      errorsContent.appendChild(li);
    }
    result.appendChild(errorsContent);
  }


  // Write out the Warnings
  var warnings = validationResults.Warnings();
  if (warnings.length > 0) {
    var warningsHeading = document.createElement('h3');
    warningsHeading.innerHTML = "Warnings:";
    warningsHeading.className = yellowClass;
    result.appendChild(warningsHeading);

    var warningsContent = document.createElement('ul');
    for (i = 0; i < warnings.length; i++) {
      var li = document.createElement('li');
      li.className = yellowClass;
      li.innerHTML = warnings[i];
      warningsContent.appendChild(li);
    }
    result.appendChild(warningsContent);
  }
}
