var inputField = document.getElementById('inputField');

function grabValue(clicked_id) {
    var number = clicked_id;
    var inputText = document.getElementById('inputField').value;
    inputField.value = (inputText + number);
}

function clearInput() {
    inputField.value = (" ");
}

function calculate() {
    var replacePi = document.getElementById('inputField').value.replace(/\&#960;/g, 'Math.PI');
    console.log(replacePi);
    var inputText = eval(document.getElementById('inputField').value);
    inputField.value = (inputText);
}

function insertPi() {
    var numberPi = 3.14;
    var inputText = document.getElementById('inputField').value;
    inputField.value = (inputText + numberPi);
}

function backspace() {
    var inputText = document.getElementById('inputField').value;
    inputText = inputText.slice(0, -1);
    inputField.value = (inputText);
}

document.getElementById('inputField').onkeypress=function(e){
    if(e.keyCode==13){
        var inputText = eval(document.getElementById('inputField').value);
        var length = inputText.length
        inputField.value = (inputText);
    }
}





