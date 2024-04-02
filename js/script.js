document.addEventListener("DOMContentLoaded", function () {
  var entryInput = document.getElementById("entryinput");
  var entryButton = document.getElementById("entrybutton");
  var textOutput = document.getElementById("textoutput");

  entryButton.addEventListener("click", function () {
    var inputValue = entryInput.value;

    alert("Eskinder Fitsum: " + inputValue);

    textOutput.textContent = inputValue;
  });
});
