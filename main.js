let result = document.getElementById("result");

function addToResult(value) {
    if (result.innerHTML == "0") {
        result.innerHTML = value;
    } else {
        result.innerHTML += value;
    }
}

function clearResult() {
    result.innerHTML = "0";
}

function deleteLast() {
    result.innerHTML = result.innerHTML.slice(0, -1);
}

function calculate() {
    result.innerHTML = eval(result.innerHTML);
}
