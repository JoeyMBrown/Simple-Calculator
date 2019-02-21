window.onload = init;

//1. On load gets all HTML elements and creates variables for them.
//2. Creates an onClickHandler that sets the buttons on click properties to handleButtons().
//3. OnKeyPressHandler allows user to click to compute answers.
//4. OnKeyPressHandler points to model.compute.
//5. onkeypress monitors what buttons are being pressed. Mimics button pressing.
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
    //var button15 = onClickHandler("button.");

    function onKeyPressHandler() {
        return function() { model.compute(); };
    }
    inputText.onclick = onKeyPressHandler();

//1. Note here, 13 is return key, 190 is decimal and 8 is backspace.
//2. Also note onkeypress doesn't support all keys, where onkeydown does.
/*onkeypress*/onkeydown = function(e) {
        switch(e.keyCode) {
            case 8:
            button13.click();
            return false;
            break;

            case 13:
            inputText.click();
            return false;
            break;

            case 48:
            button0.click();
            return false;
            break;

            case 49:
            button1.click();
            return false;
            break;

            case 50:
            button2.click();
            return false;
            break;

            case 51:
            button3.click();
            return false;
            break;

            case 52:
            button4.click();
            return false;
            break;

            case 53:
            button5.click();
            return false;
            break;

            case 54:
            button6.click();
            return false;
            break;

            case 55:
            button7.click();
            return false;
            break;

            case 56:
            button8.click();
            return false;
            break;

            case 57:
            button9.click();
            return false;
            break;

            case 190:
            display.handleButtons("button.");
            return false;
            break;
        }
    }
}


//1. handlebuttons takes the button and adds it's sixth character to innerHTML of inputText.
//2. If it's sixth char is an operator it adds spaces before and after the operator.
var display = {

 handleButtons: function(button) {
    var inputText = document.getElementById("inputText");

    if (button == "clear") {
        inputText.innerHTML = 0;
    } else if (inputText.innerHTML == 0) {
        inputText.innerHTML = button.charAt(6);
    } else if (button.charAt(6) == ".") {
        inputText.innerHTML = inputText.innerHTML + button.charAt(6);
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

//1. sets 2 local vars equal to HTML elements.
//2. Creates an empty array that will be update on submit. Splits input string into an array based on " ".
//3. answer is first index of array. operator is [i], which starts at 1, loop iterates by 2, so odds will be operator.
//4. number is set to first index after each operator.  if operator is +, add first index of array to all even indexes of array.
//5. update answerText with final answer
//Note - loops commented out good for testing.
var model = {

    compute: function() {
        var inputText = document.getElementById("inputText");
        var answerText = document.getElementById("answerText");

        var values = [];

        if (inputText.innerHTML.indexOf("+") >= 0){
            var values = inputText.innerHTML.split(" ");            
        }else if(inputText.innerHTML.indexOf("-") >= 0){
            var values = inputText.innerHTML.split(" ");
        }else if(inputText.innerHTML.indexOf("*") >= 0){
            var values = inputText.innerHTML.split(" ");
        }else if(inputText.innerHTML.indexOf("/") >= 0){
            var values = inputText.innerHTML.split(" ");
        }
        //alert(values + " Values before loop");
        var answer = Number(values[0]);
        //alert(answer + " Answer before loop");

        for(var i = 1; i < values.length + 1; i += 2){
            var operator = values[i];
            var number = Number(values[i + 1]);
            //alert(values + " Values");
            //alert(answer + " Answer right before addition")

            if(operator === "+"){
                answer += number;
            }else if(operator === "-"){
                answer -= number;
            }else if(operator === "*"){
                answer *= number;
            }else if(operator === "/"){
                answer /= number;
            }
        }
        answerText.innerHTML = answer;
    }
}
