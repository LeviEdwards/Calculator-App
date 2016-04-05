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
    var inputText = eval(document.getElementById('inputField').value);
    var length = inputText.length
    inputField.value = (inputText);
}

document.getElementById('inputField').onkeypress=function(e){
    if(e.keyCode==13){
        var inputText = eval(document.getElementById('inputField').value);
        var length = inputText.length
        inputField.value = (inputText);
    }
}




