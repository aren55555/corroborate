function startValidation() {
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

  // Write out the results
  var errors = validationResults.Errors();

  var resultHeading = document.createElement('h3');
  if (errors.length > 0) {
    resultHeading.innerHTML = "Errors:";
    resultHeading.className = "text-danger";
  } else {
    resultHeading.innerHTML = "No Errors!";
    resultHeading.className = "text-success";
  }
  result.appendChild(resultHeading);


  var resultsHTML = document.createElement('ul');
  for (i = 0; i < errors.length; i++) {
    var li = document.createElement('li');
    li.className = "text-danger";
    li.innerHTML = errors[i];
    resultsHTML.appendChild(li);
  }
  result.appendChild(resultsHTML);
}
