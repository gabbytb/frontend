var headerTitleClass = document.querySelector(".heading-title");
var containerElement = document.getElementById("container");

var headerTitleClass = document.querySelector(".heading-title");
headerTitleClass.id = "header-title";

var headerTitleElement = document.getElementById("header-title");
var countdownValue = headerTitleElement.innerHTML;

var clearinterval = setInterval(function() {
    countdownValue = countdownValue > 0 ? countdownValue - 1 : 0;
    headerTitleElement.innerHTML = countdownValue;
    console.log("Countdown: " + headerTitleElement.innerHTML);

    var randomNumber1 = Math.floor(Math.random() * 255);
    var randomNumber2 = Math.floor(Math.random() * 255);
    var randomNumber3 = Math.floor(Math.random() * 255);
    console.log(randomNumber1);
    console.log(randomNumber2);
    console.log(randomNumber3);

    
    containerElement.style.backgroundColor = "rgb(" + randomNumber1 + "," + randomNumber2 + "," + randomNumber3 + ")";

    if (countdownValue === 0) {
        clearInterval(clearinterval);
    }
}, 1000);


/*** TEST AJAX REQUEST ***/
function getTODOListFromBackend() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                console.log(this.responseText)
            } else (
                console.log("Failed Request")
            )
        }
    }
    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
    xhttp.send();
}
getTODOListFromBackend();


