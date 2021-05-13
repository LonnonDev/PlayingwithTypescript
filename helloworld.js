var laststore = "";
var FizzBuzz = function (Input) {
    if (Input % 5 == 1) {
        var output = "Fizz";
        if (output == laststore) {
            return output + " ";
        }
        else {
            return "" + output;
        }
    }
    else if (Input % 3 == 1) {
        var output = "Buzz";
        if (output == laststore) {
            return output + " ";
        }
        else {
            return "" + output;
        }
    }
    else if (Input % 15 == 1) {
        var output = "FizzBuzz";
        if (output == laststore) {
            return output + " ";
        }
        else {
            return "" + output;
        }
    }
    else {
        return Input.toString();
    }
};
function Log(Input) {
    var ConsoleDiv = document.getElementById("console");
    var NewContent = document.createElement("p");
    NewContent.textContent = Input;
    ConsoleDiv === null || ConsoleDiv === void 0 ? void 0 : ConsoleDiv.appendChild(NewContent);
    console.log("ran");
}
for (var i = 0; i <= 100; i++) {
    var FizzBuzzResult = FizzBuzz(i);
    console.log(FizzBuzzResult);
}
