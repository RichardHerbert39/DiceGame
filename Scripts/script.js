//building the DieInput object constructor
function DieInput(plusid, numberid, minusid) {
    //passing the ids of the HTML elements to use in the object
    this.plus = document.getElementById(plusid);
    this.number = document.getElementById(numberid);
    this.minus = document.getElementById(minusid);
    //creating the increment and decrement methods
    this.increment = function () {
        //check whether the value is at or above the maximum amount, if not, increment
        if (this.number.value < 10) {
            this.number.value++;
        }
        else {
            resultBox.innerHTML = "You can only roll 10 of each die type.";
            this.number.value = 10;
        }
    };
    this.decrement = function () {
        if (this.number.value > 0) {
            this.number.value--;
        }
        else {
            resultBox.innerHTML = "You can't roll less than 0 dice.";
            this.number.value = 0;
        }
    };
    //checks whether the value is outside of the permitted range
    //sets value to extreme values of range if outside of range
    this.check = function () {
        if (this.number.value < 0) {
            this.number.value = 0;
            resultBox.innerHTML = "You can't roll less than 0 dice.";
        }
        else if (this.number.value > 10) {
            this.number.value = 10;
            resultBox.innerHTML = "You can only roll 10 of each die type.";
        }
    }
    //attaching increment and decrement to the correct buttons
    //bind allows the methods to have the correct scope
    this.plus.addEventListener("click", this.increment.bind(this));
    this.minus.addEventListener("click", this.decrement.bind(this));
    //attach check function to blur of number field
    this.number.addEventListener("blur", this.check.bind(this));
}

//creating the six kinds of die inputs
var four = new DieInput("4plus", "4number", "4minus"),
    six = new DieInput("6plus", "6number", "6minus"),
    eight = new DieInput("8plus", "8number", "8minus"),
    ten = new DieInput("10plus", "10number", "10minus"),
    twelve = new DieInput("12plus", "12number", "12minus"),
    twenty = new DieInput("20plus", "20number", "20minus"),
    //a function for rolling dice and displaying the result
    rollDice = function (sides, number) {
        var i = 0,
            total = 0,
            roll = 0;
        while (i < number) {
            if (i != 0) {
                resultBox.innerHTML += "<span class='add'>+</span>";
            }
            roll = Math.ceil(Math.random() * sides);
            resultBox.innerHTML += "<div class='die'>"
            if (sides == 4) {
                if (roll == 1) {
                    resultBox.innerHTML += "<img src='Images/D4/D4One.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 2) {
                    resultBox.innerHTML += "<img src='Images/D4/D4Two.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 3) {
                    resultBox.innerHTML += "<img src='Images/D4/D4Three.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 4) {
                    resultBox.innerHTML += "<img src='Images/D4/D4Four.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
            }
            else if (sides == 6) {
                if (roll == 1) {
                    resultBox.innerHTML += "<img src='Images/D6/D6One.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 2) {
                    resultBox.innerHTML += "<img src='Images/D6/D6Two.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 3) {
                    resultBox.innerHTML += "<img src='Images/D6/D6Three.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 4) {
                    resultBox.innerHTML += "<img src='Images/D6/D6Four.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 5) {
                    resultBox.innerHTML += "<img src='Images/D6/D6Five.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 6) {
                    resultBox.innerHTML += "<img src='Images/D6/D6Six.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
            }
            else if (sides == 8) {
                if (roll == 1) {
                    resultBox.innerHTML += "<img src='Images/D8/D8One.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 2) {
                    resultBox.innerHTML += "<img src='Images/D8/D8Two.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 3) {
                    resultBox.innerHTML += "<img src='Images/D8/D8Three.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 4) {
                    resultBox.innerHTML += "<img src='Images/D8/D8Four.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 5) {
                    resultBox.innerHTML += "<img src='Images/D8/D8Five.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 6) {
                    resultBox.innerHTML += "<img src='Images/D8/D8Six.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 7) {
                    resultBox.innerHTML += "<img src='Images/D8/D8Seven.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 8) {
                    resultBox.innerHTML += "<img src='Images/D8/D8Eight.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
            }
            else if (sides == 10) {
                if (roll == 1) {
                    resultBox.innerHTML += "<img src='Images/D10/D10One.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 2) {
                    resultBox.innerHTML += "<img src='Images/D10/D10Two.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 3) {
                    resultBox.innerHTML += "<img src='Images/D10/D10Three.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 4) {
                    resultBox.innerHTML += "<img src='Images/D10/D10Four.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 5) {
                    resultBox.innerHTML += "<img src='Images/D10/D10Five.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 6) {
                    resultBox.innerHTML += "<img src='Images/D10/D10Six.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 7) {
                    resultBox.innerHTML += "<img src='Images/D10/D10Seven.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 8) {
                    resultBox.innerHTML += "<img src='Images/D10/D10Eight.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 9) {
                    resultBox.innerHTML += "<img src='Images/D10/D10Nine.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 10) {
                    resultBox.innerHTML += "<img src='Images/D10/D10Ten.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
            }
            else if (sides == 12) {
                if (roll == 1) {
                    resultBox.innerHTML += "<img src='Images/D12/D12One.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 2) {
                    resultBox.innerHTML += "<img src='Images/D12/D12Two.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 3) {
                    resultBox.innerHTML += "<img src='Images/D12/D12Three.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 4) {
                    resultBox.innerHTML += "<img src='Images/D12/D12Four.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 5) {
                    resultBox.innerHTML += "<img src='Images/D12/D12Five.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 6) {
                    resultBox.innerHTML += "<img src='Images/D12/D12Six.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 7) {
                    resultBox.innerHTML += "<img src='Images/D12/D12Seven.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 8) {
                    resultBox.innerHTML += "<img src='Images/D12/D12Eight.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 9) {
                    resultBox.innerHTML += "<img src='Images/D12/D12Nine.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 10) {
                    resultBox.innerHTML += "<img src='Images/D12/D12Ten.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 11) {
                    resultBox.innerHTML += "<img src='Images/D12/D12Eleven.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 12) {
                    resultBox.innerHTML += "<img src='Images/D12/D12Twelve.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
            }
            else if (sides == 20) {
                if (roll == 1) {
                    resultBox.innerHTML += "<img src='Images/D20/D20One.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 2) {
                    resultBox.innerHTML += "<img src='Images/D20/D20Two.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 3) {
                    resultBox.innerHTML += "<img src='Images/D20/D20Three.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 4) {
                    resultBox.innerHTML += "<img src='Images/D20/D20Four.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 5) {
                    resultBox.innerHTML += "<img src='Images/D20/D20Five.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 6) {
                    resultBox.innerHTML += "<img src='Images/D20/D20Six.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 7) {
                    resultBox.innerHTML += "<img src='Images/D20/D20Seven.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 8) {
                    resultBox.innerHTML += "<img src='Images/D20/D20Eight.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 9) {
                    resultBox.innerHTML += "<img src='Images/D20/D20Nine.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 10) {
                    resultBox.innerHTML += "<img src='Images/D20/D20Ten.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 11) {
                    resultBox.innerHTML += "<img src='Images/D20/D20Eleven.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 12) {
                    resultBox.innerHTML += "<img src='Images/D20/D20Twelve.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 13) {
                    resultBox.innerHTML += "<img src='Images/D20/D20Thirteen.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 14) {
                    resultBox.innerHTML += "<img src='Images/D20/D20Fourteen.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 15) {
                    resultBox.innerHTML += "<img src='Images/D20/D20Fifteen.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 16) {
                    resultBox.innerHTML += "<img src='Images/D20/D20Sixteen.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 17) {
                    resultBox.innerHTML += "<img src='Images/D20/D20Seventeen.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 18) {
                    resultBox.innerHTML += "<img src='Images/D20/D20Eighteen.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 19) {
                    resultBox.innerHTML += "<img src='Images/D20/D20Nineteen.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
                else if (roll == 20) {
                    resultBox.innerHTML += "<img src='Images/D20/D20Twenty.png' alt='Sorry, your browser does not support this image' class='resultImage'>";
                }
            }
            resultBox.innerHTML += "<span class='individual'>" + roll 
                + "</span></div>";
            total += roll;
            i++;
        }
        if (number > 1) {
            resultBox.innerHTML += "<br/><br/><span class='total'>Total:" + total
                + "</span>";
        }
    },
    //functions and variables for the roll and clear buttons
    roll = function () {
        var prev = false;
        resultBox.innerHTML = "";
        if (four.number.value > 0) {
            prev = true;
            four.number.value = Math.ceil(four.number.value);
            resultBox.innerHTML += "<div classe='result'>" + four.number.value
                + "d4:<br/>";
            rollDice(4, four.number.value);
            resultBox.innerHTML += "</div>";
        }
        if (six.number.value > 0) {
            if (prev) {
                resultBox.innerHTML += "<br/><br/>";
            }
            prev = true;
            six.number.value = Math.ceil(six.number.value);
            resultBox.innerHTML += "<div classe='result'>" + six.number.value
                + "d6:<br/>";
            rollDice(6, six.number.value);
            resultBox.innerHTML += "</div>";
        }
        if (eight.number.value > 0) {
            if (prev) {
                resultBox.innerHTML += "<br/><br/>";
            }
            prev = true;
            eight.number.value = Math.ceil(eight.number.value);
            resultBox.innerHTML += "<div classe='result'>" + eight.number.value
                + "d8:<br/>";
            rollDice(8, eight.number.value);
            resultBox.innerHTML += "</div>";
        }
        if (ten.number.value > 0) {
            if (prev) {
                resultBox.innerHTML += "<br/><br/>";
            }
            prev = true;
            ten.number.value = Math.ceil(ten.number.value);
            resultBox.innerHTML += "<div classe='result'>" + ten.number.value
                + "d10:<br/>";
            rollDice(10, ten.number.value);
            resultBox.innerHTML += "</div>";
        }
        if (twelve.number.value > 0) {
            if (prev) {
                resultBox.innerHTML += "<br/><br/>";
            }
            prev = true;
            twelve.number.value = Math.ceil(twelve.number.value);
            resultBox.innerHTML += "<div classe='result'>" + twelve.number.value
                + "d12:<br/>";
            rollDice(12, twelve.number.value);
            resultBox.innerHTML += "</div>";
        }
        if (twenty.number.value > 0) {
            if (prev) {
                resultBox.innerHTML += "<br/><br/>";
            }
            prev = true;
            twenty.number.value = Math.ceil(twenty.number.value);
            resultBox.innerHTML += "<div classe='result'>" + twenty.number.value
                + "d20:<br/>";
            rollDice(20, twenty.number.value);
            resultBox.innerHTML += "</div>";
        }
        if (prev) {
            clearButton.style.display = "inline";
            buttons.style.marginLeft = "-120px";
        }
        else {
            resultBox.innerHTML = "Please choose some dice.";
        }
    },
    clear = function () {
        resultBox.innerHTML = 
            "You can roll a maximum of 10 dice of each type.<br/>Alternatively, click on a die to roll one of it.";
        clearButton.style.display = "none";
        buttons.style.marginLeft = "-60px";
        four.number.value = 0;
        six.number.value = 0;
        eight.number.value = 0;
        ten.number.value = 0;
        twelve.number.value = 0;
        twenty.number.value = 0;
    },
    rollButton = document.getElementById("Roll"),
    clearButton = document.getElementById("Clear"),
    buttons = document.getElementById("Buttons"),
    resultBox = document.getElementById("Result"),
    //functions and variables for clicking on dice images
    d4 = document.getElementById("1D4"),
    d6 = document.getElementById("1D6"),
    d8 = document.getElementById("1D8"),
    d10 = document.getElementById("1D10"),
    d12 = document.getElementById("1D12"),
    d20 = document.getElementById("1D20"),
    //these functions set all values to 0, except the intended one, which it sets to 1
    //it then invokes the roll function
    imageClick4 = function () {
        four.number.value = 1;
        six.number.value = 0;
        eight.number.value = 0;
        ten.number.value = 0;
        twelve.number.value = 0;
        twenty.number.value = 0;
        roll();
    },
    imageClick6 = function () {
        four.number.value = 0;
        six.number.value = 1;
        eight.number.value = 0;
        ten.number.value = 0;
        twelve.number.value = 0;
        twenty.number.value = 0;
        roll();
    },
    imageClick8 = function () {
        four.number.value = 0;
        six.number.value = 0;
        eight.number.value = 1;
        ten.number.value = 0;
        twelve.number.value = 0;
        twenty.number.value = 0;
        roll();
    },
    imageClick10 = function () {
        four.number.value = 0;
        six.number.value = 0;
        eight.number.value = 0;
        ten.number.value = 1;
        twelve.number.value = 0;
        twenty.number.value = 0;
        roll();
    },
    imageClick12 = function () {
        four.number.value = 0;
        six.number.value = 0;
        eight.number.value = 0;
        ten.number.value = 0;
        twelve.number.value = 1;
        twenty.number.value = 0;
        roll();
    },
    imageClick20 = function () {
        four.number.value = 0;
        six.number.value = 0;
        eight.number.value = 0;
        ten.number.value = 0;
        twelve.number.value = 0;
        twenty.number.value = 1;
        roll();
    };
//attaching functions to click events
rollButton.addEventListener("click", roll);
clearButton.addEventListener("click", clear);
d4.addEventListener("click", imageClick4);
d6.addEventListener("click", imageClick6);
d8.addEventListener("click", imageClick8);
d10.addEventListener("click", imageClick10);
d12.addEventListener("click", imageClick12);
d20.addEventListener("click", imageClick20);