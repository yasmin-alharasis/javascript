//Using Reduce 1 -5
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

-----------------------------------------------------------------

/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array
Ex: avgAge(persons) => 41.2
*/
function  avgAge(arr){
	var sum=arr.reduce((x,y)=> x+y.age,0);
	var avg=sum/arr.length;
	return avg;
}\ 
avgAge (persons);
------------------------------------------------------------------
/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name
Ex: longestName(persons) => 'Soso Al-Amora'
*/
function longestName(arr){
	var longName=arr.reduce((x,y,z)=>{
		let longName=y.name.first.length+y.name.last.length;
		if(longName>x.length)
		{
			return y.name.first+y.name.last;
		}
		return x;
	},'');
	return longName;
}
longestName(persons);
-------------------------------------------------------------------
/*
3
Create a function called maxNumber
that accept an array
and return max number
Ex: maxNumber([1,2,4,9]) => 9
*/
function maxNumber(arr){
	let max=arr.reduce((x,y)=>{
		if (x>y)
			{return x;} 
		return y; })
return max;
}
maxNumber([1,2,4,9]);

------------------------------------------------------------------
/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string
Ex: repeatChar("hello world",w) => 1
*/
function repeatChar(str, char){
	var count=0;
	var repeat=str.split('');
  let repeatt=repeat.reduce((x,y)=>{if(y===char){ return count++;}
  });
  return count;
}

repeatChar("hahaha","a");

-------------------------------------------------------------------
/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them
Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/
function usAndNumberBeetweenUs(num1,num2){

}


-------------------------------------------------------------------
//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only
Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/
function evenOnly(arr){
    var nArr = arr.filter(num=>num%2==0);
    return nArr;
}
-------------------------------------------------------------------
/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4
Ex: multiFour([1,8,6,4]) => [8,4]
*/

function multiFour(arr){
    var nArr = arr.filter(num=>num%4==0);
    return nArr;

}
--------------------------------------------------------------------
/*
8
**this question not that easy mybe you will need to use 
two function inside each other
Create a function called containChar
that accept an array of string
and return an array of these string that contain this char
Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/

   function containChar(arr, char) {
        return  arr.filter(x => x.includes(char));
    }
--------------------------------------------------------------------

/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in 
even index
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/
function evenIndexOddLength(arr){
	return arr.filter((e,index)=>
		index%2==0&&e.length%2==1)
			}
--------------------------------------------------------------------
/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number
Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/
function olderThan(arr,num){
	return arr.filter(e=>e.age>num);
}
------------------------------------------------------------------
/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/
function shorterThan(arr,num){
	return arr.filter(e=>e.length<num);
}