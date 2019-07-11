/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
 
  function integer(a,b) {

  if (a > b ) {
    document.write("The larg number is " + a );
  } else  {
    document.write("The larg number is " + b);
  } 

  }
  integer(2,8);

 /******* End Your Code ********* */
 -------------------------------------------------------------------

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/

function signProduct(x,y,z) {
	if (x<0) {console.log(x+' is -')}
		else{console.log(x+' is +')}

				if (y<0) {console.log(y+' is -')}
		else{console.log(y+' is +')}


				if (z<0) {console.log(z+' is -')}
		else{console.log(z+' is +')}
	
}
/******* End Your Code ********* */
------------------------------------------------------------

 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
 
var x=0;
var y=-1;
var z=4;
function sort(x,y,z) {
	if (x>y && x>z) {
if(y>z){
	console.log(x+','+y+','+z);
}
else{
		console.log(x+','+z+','+y);
}
}
else if(y>x && y>z)
{
if(x>z){console.log(y+','+x+','+z)}
	else{console.log(y+','+z+','+x)}
}else if(z>x && z>y)
{
	if(x>y)
		{console.log(z+','+x+','+y)}
else{console.log(z+','+y+','+x)}
}}
sort(x,y,z)


  
 /******* End Your Code ********* */
-------------------------------------------------------------

/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
var a=-5;
var b=-2;
var c=-6;
var d=0;
var e=-1;
if(a>b && a>c && a>d && a>e)
{console.log(a);}

else if (b>a && b>c && b>d && b>e)
{console.log(b);}
else if (c>a && c>b && c>d && c>e)
{console.log(c);}
else if (d>a && d>b && d>c && d>e)
{console.log(d);}
else
{console.log(e);}
  
 /******* End Your Code ********* */
 ------------------------------------------------------------

 /* 5.Fix the if statement to display "Hello World" if x is greater
  than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
var x=5;
var y=3;
  if(x>y){
  	console.log("Hello World");
  }else
  {console.log("Goodbye");}
 /******* End Your Code ********* */
-------------------------------------------------------------

/*write the if statement to display "Hello World" if x is greater
 than y.*/
/******* Start Your Code *********/
var x=5;
var y=3;
  if(x>y){
  	console.log("Hello World");
  }
 /******* End Your Code ********* */


