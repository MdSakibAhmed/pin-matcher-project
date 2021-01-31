
// Display random 4 digit number in the UI
let fourDigitNumber;
let generateFourDigitPin = (function () {
    document.getElementById("generate-pin-btn").addEventListener("click", function () {

        let randomNumber = Math.random();
        console.log(randomNumber);
        let randomNumberMultiply = 10000 + randomNumber * 90000
        let numberWithoutFloat = Math.floor(randomNumberMultiply);
        console.log(numberWithoutFloat);
        let toString = numberWithoutFloat.toString();
        let fourDigitNumberStr = toString.substring(0, 4);
        console.log(fourDigitNumberStr);
        fourDigitNumber = Number(fourDigitNumberStr)
        console.log(fourDigitNumber);

        document.getElementById("genarat-pin-display").value = fourDigitNumber;
    })

})()


// Display the typed number in the UI
let keyValue = "";
let displayKeyValues = (function () {
    let getKeyNumber = document.getElementsByClassName("calc-button-row");
    for (let i = 0; i < getKeyNumber.length; i++) {
        const key = getKeyNumber[i];
        key.addEventListener("click", function (e) {
            let targetedKey = e.target;
            if (targetedKey.innerText == "B") {
                keyValue = keyValue.slice(0, -1);
            } else if(targetedKey.innerText == "C"){
                keyValue = "";

            } else{
                keyValue = keyValue + targetedKey.innerText;
            }

            document.getElementById("display-key-value").value = keyValue;
        })
    }
})()


// Display the result correct or wrong
let getMatchResult = (function () {
    let maxWrongCount = 5;
    document.getElementById("check-match").addEventListener("click", function () {
        keyValue ="";
        let genaratedNumber = parseInt(document.getElementById("genarat-pin-display").value);
        let typedKeyNumber = parseInt(document.getElementById
            ("display-key-value").value);

        if (genaratedNumber == typedKeyNumber) {
            document.getElementById("success-match").style.display = "block";
            document.getElementById("failed-match").style.display = "none";
        } else {
            if(maxWrongCount >0){
                maxWrongCount--
                document.getElementById("wrong-count").innerText = maxWrongCount;
                document.getElementById("failed-match").style.display = "block";
                document.getElementById("success-match").style.display = "none";

            }
            else{
                alert("You have inserted wrong answer three times.Therefor you cant now give answer else")
            }
        }
    })

})()


// RE-START PROGRAM
let resetProgram = (function () {
    document.getElementById("re-start").addEventListener("click", function () {
        keyValue = "";
        fourDigitNumber = "";
        document.getElementById("success-match").style.display = "none";
        document.getElementById("failed-match").style.display = "none";
        document.getElementById("genarat-pin-display").value = "";
        document.getElementById("display-key-value").value = "";
    })

})()
