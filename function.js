/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."
Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."*/


function tellFortune(job,location,partner,child){
	console.log("You will be a\xa0" + job + "\xa0in\xa0" + location + "\xa0and married to\xa0" + partner + "\xa0with\xa0" + child + "\xa0kids.\xa0")
}
tellFortune(1,2,3,4);
--------------------------------------------------------------------------------------


/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"
Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(age){
	var dogYears=7*age;
	console.log("Your doggie is \xa0"+dogYears+"\xa0years old in dog years!")
}
calculateDogAge(1);
---------------------------------------------------------------------------------
/*3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant 
max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"
Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of
 100;
*/
function calculateSupply(age,numPerDay){
	var maxAge=100;
	var totalNeeded=((numPerDay*365)*(maxAge-age));
	console.log("You will need\xa0"+totalNeeded+"\xa0cups of tea to last you until the ripe old age of\xa0"+maxAge);
}
calculateSupply(30,3);
--------------------------------------------------------------------------------

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name
Ex: greet("Jouza")
=> "Hello Jouza"
*/
function greet(name){
	console.log("hello\xa0"+name);
}
greet("Jouza");
--------------------------------------------------------------------------------
/*
5
what is the error:
function double(cat) {
  return 2 * x;
}
function double(7) {//Unexpected number
  return 2 * 7;
}
function double('7') {//Unexpected string
  return 2 * 'x';
}
*/

function double(cat) {//undeclared x
  return 2 * x;
}
function double(7) {//Unexpected number (must be variable)
  return 2 * 7;
}
function double('7') {//NAN
  return 2 * 'x';
}
----------------------------------------------------------------------------

/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}
functiondouble2 x)
return 2 * x;
}
function (x) double3 {
  return 2 * x;
*/


function double1(x){
  return 2 * x ;
}
function double2 (x){
return 2 * x;
}
function double3 (x){
  return 2 * x;
}
-----------------------------------------------------------------------------
/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number
Ex: cube(4)
=> 64
*/

function cube(cubeCounter){
	return cubeCounter **3;
}

cube(here the value);
----------------------------------------------------------------------------

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers
Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

function multiply(firstNumber, SecondNumber){
	return firstNumber * SecondNumber;
}
-----------------------------------------------------------------------------
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"
Ex: canIGetADrivingLicense(21)
=> "yes you can"
Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"
Ex: canIGetADrivingLicense(20)
=> "yes you can"
*/

function canIGetADrivingLicense(age){
    var operation = 20 - age;
    if (age >= 20) {
        return "yes you can";
    }
    else if (age < 20) {
        return "please come back after\xa0" + operation + "\xa0years to get one"}
}

canIGetADrivingLicense();
----------------------------------------------------------------------------
/*10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.
**hint: how we can know string length   Ex: : "tree".length   => 4
Ex: sameLength("tree","clue")
=> true
Ex: sameLength("tree","car")
=> false
*/

function sameLength(firstNumber, secondNumber){
    var firstLength = (firstNumber).length;
    var secondLength = (secondNumber).length;

    if (firstLength == secondLength) {return "True"}
        else{return "False"}
}

sameLength("", "");
------------------------------------------------------------------------------
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers
Ex: largerNubmer(5,6)
=> 6
Ex: largerNubmer(5,3)
=> 5
*/

function largerNumber(firstNumber,secondNumber){
    firstParameter = firstNumber;
    secondParameter = secondNumber;

        if (firstParameter > secondParameter) {return firstParameter}
        else if (firstParameter < secondParameter) { return secondParameter} 
}
------------------------------------------------------------------------------
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number
Ex: smallerNubmer(8,6,7)
=> 6
Ex: smallerNubmer(5,99,34)
=> 5
Ex: smallerNubmer(5,99,3)
=> 3
Ex: smallerNubmer(5,3,3)
=> 3
*/
function smallerNubmer(one,two,three){
if(one<two){
	if(one<three){
		return one;
	}
	else{ return three;}
}
else if (two<one){
	if(two<three){
		return two;
	}
	else { 
		return three;}
}
else if (three<one){
	if(three<two){
		return three;
	}else {
		return two;
	}
}
}
------------------------------------------------------------------------------
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string
Ex: shorterString("air","school","car","by","github")
=> by
Ex: shorterString("air","tr","car","by","github")
=> tr
Ex: shorterString("by","tr","car","air","github")
=> by
Ex: shorterString("air","by","car","school","github")
=> by
Ex: shorterString("air","tr","by","car","github")
=> by
Ex: shorterString("air","tr","car","github","by")
=> by
*/



function  shorterString(a,b,c,d,f){
	var one = a.length;
	var two= b.length;
	var three= c.length;
	var four= d.length;
	var five= f.length;
	if (one<=two && one<=three && one<=four && one<=five)
		{ return a;}
	else if (two<=one && two<=three && two<=four && two<=five)
		{ return b;}
	else if (three<=one && three<=two && three<=four && three<=five)
		{ return c;}
	else if (four<=one && four<=two && four<=three && four<=five)
		{ return d;}
	else 
		{ return f;}
}
-------------------------------------------------------------------------
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string
Ex: longerString("air","school","car","github")
=> school
Ex: longerString("air","schoo","car","github")
=> github
try all the cases (change the order of the longestString)
*/
function  longerString(a,b,c,d){
	var one = a.length;
	var two= b.length;
	var three= c.length;
	var four= d.length;
	if (one>=two && one>=three && one>=four )
		{ return a;}
	else if (two>=one && two>=three && two>=four)
		{ return b;}
	else if (three>=one && three>=two && three>=four)
		{ return c;}
	else
		{ return d;}
}
--------------------------------------------------------------------------
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd
Ex: isEven(1)
=> false
Ex: isEven(2)
=> true
*/
function isEven(num){
	if (num%2==0)
		{ return true;}
	else {
		return false ;
	}

}
--------------------------------------------------------------------------
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even
Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true
*/
function isOdd(num){
		if (num%2==1)
		{ return true;}
	else {
		return false ;
	}

}
---------------------------------------------------------------------------
/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed
Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5
*/

function positive(num){
	if (num>0){
		return num;
	}
	else if (num<0){
		return( -1*num);
	}

}
-------------------------------------------------------------------------
/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.
Ex: fullName("Mohammad","Jouza")
=> "Mohammad Jouza"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(firstName,lastName){
	console.log(firstName+' '+lastName); 
}
-------------------------------------------------------------------------
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.
Ex: average(1,2,3,4,5)
=> 3
Ex: average(5,7,9,3,5)
=> 5.8
*/

function average(one,two,three,four,five){
 var avg= ((one+two+three+four+five)/5);
 return avg;
}
------------------------------------------------------------------------
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN
Ex: randomNumber()
=> 0.2278
Ex: randomNumber()
=> 0.475
*/

function randomNumber(){
    return Math.random(); 
}
------------------------------------------------------------------------
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN
Ex: randomBetweenNumbers(1,8)
=> 7.5412
*/
function randomBetweenNumbers(min,max){
	return Math.random()*((max-min)+min);
}
randomBetweenNumbers(1,8)
------------------------------------------------------------------------
/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49
Ex: scoreInUniversty(96)
=> "A"
Ex: scoreInUniversty(3)
=> "F"
Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(myScore){
    if (myScore <= 100 && myScore >= 95) {
        return "A";
    }

    else if (myScore <= 94 && myScore >= 85) {
        return "B"
    }

    else if (myScore <= 84 && myScore >= 70) {
        return "C"
    }
    else if (myScore <= 69 && myScore >= 50) {
        return "D"
    }
    else if (myScore <= 49 && myScore >= 0) {
        return "f"
    }
}
---------------------------------------------------------------------------
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: counter()
=> 3
*/
var num = 0
function counter() {
  return ++num;
}
---------------------------------------------------------------------------
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: counter()
=> 3
Ex: resetCounter()
=> 3 and the counter reset now
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: resetCounter()
=> 2 and the counter reset now
Ex: counter()
=> 1
*/

function resetCounter(){
	var value = num+" and the counter reset now";

	num = 0;

	return num;
}