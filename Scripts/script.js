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
	//a global variable to check whether the dice have been rolled
	rolled = 0,
    //a function for rolling dice and displaying the result
    rollDice = function (sides, number) {
		rolled = 1;
		if (window.innerWidth < 768) {
			diceBar.style.display = "none";
			resultBox.style.display = "block";
		}
        var i = 0,
            total = 0,
            roll = 0;
        while (i < number) {
            if (i != 0) {
                resultBox.innerHTML += "<span class='add'>+</span>";
            }
            roll = Math.ceil(Math.random() * sides);
            if (sides == 4) {
                resultBox.innerHTML += "<img src='Images/D4/D4_" + roll + ".png' alt='Sorry, your browser does not support this image. You got a " + roll + "' class='resultImage'>";
            }
            else if (sides == 6) {
                resultBox.innerHTML += "<img src='Images/D6/D6_" + roll + ".png' alt='Sorry, your browser does not support this image. You got a " + roll + "' class='resultImage'>";
            }
            else if (sides == 8) {
                resultBox.innerHTML += "<img src='Images/D8/D8_" + roll + ".png' alt='Sorry, your browser does not support this image. You got a " + roll + "' class='resultImage'>";
            }
            else if (sides == 10) {
                resultBox.innerHTML += "<img src='Images/D10/D10_" + roll + ".png' alt='Sorry, your browser does not support this image. You got a " + roll + "' class='resultImage'>";
            }
            else if (sides == 12) {
                resultBox.innerHTML += "<img src='Images/D12/D12_" + roll + ".png' alt='Sorry, your browser does not support this image. You got a " + roll + "' class='resultImage'>";
            }
            else if (sides == 20) {
                resultBox.innerHTML += "<img src='Images/D20/D20_" + roll + ".png' alt='Sorry, your browser does not support this image. You got a " + roll + "' class='resultImage'>";
            }
            total += roll;
            i++;
        }
        if (number > 1) {
            resultBox.innerHTML += "<br/><span class='total'>Total:" + total
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
        if (prev == false) {
            resultBox.innerHTML = "Please choose some dice.";
        }
    },
    clear = function () {
		rolled = 0;
		if (window.innerWidth < 768) {
			diceBar.style.display = "flex";
			resultBox.style.display = "none";
		}
        resultBox.innerHTML = 
            "You can roll a maximum of 10 dice of each type.<br/>Alternatively, click on a die to roll one of it.";
        four.number.value = 0;
        six.number.value = 0;
        eight.number.value = 0;
        ten.number.value = 0;
        twelve.number.value = 0;
        twenty.number.value = 0;
    },
    rollButton = document.getElementById("Roll"),
    clearButton = document.getElementById("Clear"),
    resultBox = document.getElementById("Result"),
	//variable to store the dice bar
	diceBar = document.getElementById("DiceBar"),
    //functions and variables for clicking on dice images
    d4 = document.getElementById("1D4"),
    d6 = document.getElementById("1D6"),
    d8 = document.getElementById("1D8"),
    d10 = document.getElementById("1D10"),
    d12 = document.getElementById("1D12"),
    d20 = document.getElementById("1D20"),
    //these functions run the clear function, then set the intended value to 1
    //they then invoke the roll function
    imageClick4 = function () {
		clear();
        four.number.value = 1;
        roll();
    },
    imageClick6 = function () {
		clear();
        six.number.value = 1;
        roll();
    },
    imageClick8 = function () {
		clear();
        eight.number.value = 1;
        roll();
    },
    imageClick10 = function () {
		clear();
        ten.number.value = 1;
        roll();
    },
    imageClick12 = function () {
		clear();
        twelve.number.value = 1;
        roll();
    },
    imageClick20 = function () {
		clear();
        twenty.number.value = 1;
        roll();
    },
	//a function that checks the size of the window, and whether the dice have been rolled
	//it then hides or shows elements as appropriate
	sizeChanged = function() {
		if (window.innerWidth < 768){
			resultBox.style.height = "90%";
			if (rolled == 1){
				diceBar.style.display = "none";
				resultBox.style.display = "block";
			}
			else {
				diceBar.style.display = "flex";
				resultBox.style.display = "none";
			}
		}
		else {
			resultBox.style.height = "auto";
			diceBar.style.display = "flex";
			resultBox.style.display = "block";
		}
	};
//attaching functions to click events and window resize event
rollButton.addEventListener("click", roll);
clearButton.addEventListener("click", clear);
d4.addEventListener("click", imageClick4);
d6.addEventListener("click", imageClick6);
d8.addEventListener("click", imageClick8);
d10.addEventListener("click", imageClick10);
d12.addEventListener("click", imageClick12);
d20.addEventListener("click", imageClick20);
window.addEventListener("resize", sizeChanged);