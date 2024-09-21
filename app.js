document.write(`<center><h1 style = "color: #016764; font-size: 60px; text-decoration: underline #016764"; > Assignment: 38 to 42 </h1></center>`)

// Write a custom function power ( a, b ), to calculate the value of
// a raised to b.
function calculate(a,b){
    return Math.pow(a ,b)
}
alert((calculate(3,3)));


// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

function leapYears(years){
        if (years % 4 === 0) {
            if (years % 100 === 0) {
                if (years % 400 === 0) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

const years = parseFloat(prompt("Enter a year"),10)
if(leapYears(years)){
    alert(`${years} is leap year`)
} else{
    alert(`${years} is not a leap year`)
}

leapYears()


// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

function areaOfTriangle(a,b,c){
    var s = (a + b + c) /2 
   return s
   

}

function area(a, b, c) {
    var s = areaOfTriangle(a, b, c); 
    var areaValue = Math.sqrt(s * (s - a) * (s - b) * (s - c));  
    alert(areaValue);  
}

area(22, 21, 33);



// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

function mainFunction(){
    var math = parseFloat(prompt("Enter Math Marks:"));
    var english = parseFloat(prompt("Enter English Marks:"));
    var urdu = parseFloat(prompt("Enter Urdu Marks:"));
    var sum =  math + english + urdu;
    var totalMarks = 300;

    var avg = average(sum, totalMarks);
    var percent = percentage(avg);

    alert("Average: " + avg + "\nPercentage: " + percent + "%");
}

function average(sum, totalMarks) {
    return sum / 3; 
}

function percentage(avg) {
    return (avg / 100) * 100; 
}

mainFunction();



// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

function indexOf(str, char, strIndex = 0) {
    if (strIndex < 0) {
        strIndex = 0; 
    }
    for (let i = strIndex; i < str.length; i++) {
        if (str[i] === char) {
            return i; 
        }
    }
    return -1; 
}
let index = indexOf(prompt("Enter any character:"), prompt("Enter character finding index"));
alert(index); 


// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.
function deletionVowels() {
    var vowels = "aeiouAEIOU"; 
    var sentence = prompt("Enter any sentence (max 25 characters):");

    if (sentence.length <= 25) {
        var result = ""; 

        for (var i = 0; i < sentence.length; i++) {
            if (vowels.indexOf(sentence[i]) === -1) {
                result += sentence[i]; 
            }
        }
        alert("Sentence without vowels: " + result); 
    } else {
        alert("Please enter a sentence with 25 characters or fewer."); 
    }
}

deletionVowels();

function countVowelPairs(text) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < text.length - 1; i++) {
        if (vowels.includes(text[i]) && vowels.includes(text[i + 1])) {
            count++;
        }
    }

    return count;
}

const text = prompt("Enter any sentence to count vowel pairs:");
const result = countVowelPairs(text);
alert("Number of vowel pairs: " + result);







// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

var distance = prompt("Enter two cities Distance in km:")
document.write(`<h2 style="color: gold; font-size: 60px;margin: 26px; ">Q8:</h2>`)
document.write(`<h2 style="color: white; font-size: 60px;margin: 26px; ">Conversion of Kilometers: ${distance}km</h2>`)
function meters(){
    const meters = distance * 1000; 
    document.write(`<h2 style="color: white; font-size: 60px;margin: 26px; ">In Meters: ${meters}m</h2>`)
}
meters()

function feet(){
    const feets = distance * 3280.84; 
    document.write(`<h2 style="color: white; font-size: 60px;margin: 26px; ">In Feets: ${feets}ft</h2>`)
}
feet()

function inches(){
     const inch = distance * 39370.1
    document.write(`<h2 style="color: white; font-size: 60px;margin: 26px; ">In Inches: ${inch}in</h2>`)
}
inches()

function centimeters(){
    const centi = distance * 100000; 
    document.write(`<h2 style="color: white; font-size: 60px;margin: 26px; ">In Centimeter: ${centi}</h2>`)
}
centimeters()


// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour

function calculatPay() {
    const workHour = parseInt(prompt("Enter the number of hours worked:"));
    if (isNaN(workHour) || workHour < 0) {
        alert("Please enter a valid number of hours.");
        return; 
    }
    const regular = 40;
    const overtimeRate = 12.00; 
    let overtimePay = 0;
    if (workHour > regular) {
        const overtimeHours = workHour - regular;
        overtimePay = overtimeHours * overtimeRate;
        alert(`Overtime pay for ${workHour} hours worked is: Rs. ${overtimePay.toFixed(2)}`);
    } else {
        alert("You didn't work extra hours 😡");
    }
}

calculatPay();



// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

function calculateCurrencyNotes() {
    const totalAmount = prompt("Enter the total amount to be withdrawn: ");
    const notes100 = Math.floor(totalAmount / 100);
    const remainingAfter100 = totalAmount % 100;
    const notes50 = Math.floor(remainingAfter100 / 50);
    const remainingAfter50 = remainingAfter100 % 50;
    const notes10 = Math.floor(remainingAfter50 / 10);
   alert(`Number of 100 notes: ${notes100}`);
  alert(`Number of 50 notes: ${notes50}`);
  alert(`Number of 10 notes: ${notes10}`);
}
calculateCurrencyNotes();

