window.onload = init;

function init () {
    var button0 = document.getElementById("button0");
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    var button4 = document.getElementById("button4");
    var button5 = document.getElementById("button5");
    var button6 = document.getElementById("button6");
    var button7 = document.getElementById("button7");
    var button8 = document.getElementById("button8");
    var button9 = document.getElementById("button9");
    var button10 = document.getElementById("button10");
    var button11 = document.getElementById("button11");
    var button12 = document.getElementById("button12");
    var button13 = document.getElementById("button13");
    var button14 = document.getElementById("button14");

    
    function onClickHandler(button) {
        return function() { display.handleButtons(button); };
    }
    button0.onclick = onClickHandler("button0");
    button1.onclick = onClickHandler("button1");
    button2.onclick = onClickHandler("button2");
    button3.onclick = onClickHandler("button3");
    button4.onclick = onClickHandler("button4");
    button5.onclick = onClickHandler("button5");
    button6.onclick = onClickHandler("button6");
    button7.onclick = onClickHandler("button7");
    button8.onclick = onClickHandler("button8");
    button9.onclick = onClickHandler("button9");
    button10.onclick = onClickHandler("button+");
    button11.onclick = onClickHandler("button-");
    button12.onclick = onClickHandler("button/");
    button13.onclick = onClickHandler("clear");
    button14.onclick = onClickHandler("button*");
    function onKeyPressHandler() {
        return function() { model.compute(); };
    }
    inputText.onclick = onKeyPressHandler();
    onkeypress = onKeyPressHandler();
}

var display = {

 handleButtons: function(button) {
    var inputText = document.getElementById("inputText");

    if (inputText.innerHTML == 0) {
        inputText.innerHTML = button.charAt(6);
    } else if (button == "clear") {
        inputText.innerHTML = 0;
    } else if (button.charAt(6) == "+") {
        inputText.innerHTML = inputText.innerHTML + " " + button.charAt(6) + " ";
    } else if (button.charAt(6) == "-") {
        inputText.innerHTML = inputText.innerHTML + " " + button.charAt(6) + " ";
    } else if (button.charAt(6) == "/") {
        inputText.innerHTML = inputText.innerHTML + " " + button.charAt(6) + " ";
    } else if (button.charAt(6) == "*") {
        inputText.innerHTML = inputText.innerHTML + " " + button.charAt(6) + " ";
    } else {
        inputText.innerHTML = inputText.innerHTML + button.charAt(6);
    }
  }
}

var model = {

    compute: function() {
        var inputText = document.getElementById("inputText");
        var answerText = document.getElementById("answerText");

        //for (var i = 0; i < values.length; i++) {

            if (inputText.innerHTML.indexOf("+") >= 0) {
                var values = inputText.innerHTML.split("+");

                var equals = (Number(values[0]) + Number(values[1]));
                answerText.innerHTML = equals;
        } else if (inputText.innerHTML.indexOf("-") >= 0) {
            var values = inputText.innerHTML.split("-");
    
            var equals = (Number(values[0]) - Number(values[1]));
            answerText.innerHTML = equals;
        } else if (inputText.innerHTML.indexOf("/") >= 0) {
            var values = inputText.innerHTML.split("/");
    
            var equals = (Number(values[0]) / Number(values[1]));
            answerText.innerHTML = equals;
        } else if (inputText.innerHTML.indexOf("*") >= 0) {
            var values = inputText.innerHTML.split("*");
    
            var equals = (Number(values[0]) * Number(values[1]));
            answerText.innerHTML = equals;
            }
        //}
    }
}

function handleKeyPress(e) {
    var inputText = document.getElementById("inputText");

    if (e.keyCode === 13) {
        inputText.click();
    }
}
