 var userInput = document.getElementById("userInput");
    var messageBox = document.getElementById("message");
    var messageBox2 = document.getElementById("message2");
    var month = document.getElementById("month");
    var day = document.getElementById("day");
    var year = document.getElementById("year");

    function newMessage() {
      userInput.addEventListener("input", function() {
        var message = userInput.value + " " + month.value + "/" + day.value + "/" + year.value;
        messageBox.value = message;
        messageBox2.value = message;
      });
    }

    newMessage();
