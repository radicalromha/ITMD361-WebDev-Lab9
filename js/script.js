//the main function
function init() {
  var button = document.getElementById("entrybutton");

  //function to show text
  function showMeText() {
    var textbox = document.getElementById("entryinput");
    document.getElementById("textoutput").innerHTML = textbox.value;
    alert("Eskinder Fitsum: " + textbox.value);
  }
}
