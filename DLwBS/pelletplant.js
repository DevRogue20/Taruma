document.getElementById("pelletLogFormSubmit").addEventListener("click", logSubmit);
document.getElementById("pelletLogHeaderSubmit").addEventListener("click", headerSubmit);

function handleClick() {
  alert("I got Clicked!!");
}

function headerSubmit() {
  //alert("Header Submitted!");
  var date = document.getElementById("indputDate");
  var names = document.getElementById("inputName").value;
  var weather = document.getElementById("inputWeather").value;
  var shift = document.getElementById("inputShift").value;
  var rawMC = document.getElementById("inputRawMC").value;
  var dryerSP = document.getElementById("inputDryerSP").value;
  var blend = document.getElementById("inputBlend").value;
  var dryMC = document.getElementById("inputDryMC").value;
  var rolls = document.getElementById("inputRollsGreased").value;
  var bulkDensity = document.getElementById("inputRawBD").value;
  var logHeader = document.getElementById("logDisplayContainer").value;

  logDisplayContainer.innerHTML = "Date: " + date + "     Name: " + names + "     Weather: "
   + weather + "     Shift: " + shift + "     Raw MC: " + rawMC + "     Dryer SP: " + dryerSP + "     Blend: " + blend +
    "     Dry MC: " + dryMC + "     Rolls Greased? " + rolls + "     Raw Bulk Density: " + bulkDensity + "\n";
}

function logSubmit() {
  alert("Log Form Subbmited!");
}
