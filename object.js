/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/
var person={firstName:'yasmin',lastName:'alharasis',age:23,dob:'18-7-1996',favoriteFood:['mansaf','mlokhya','yalngi'],
favoriteMovie:['harrybooter','taitanic','the loard of the ring','x','y']
};
person.favoriteFood;

----------------------------------------------------------------------------------------------

var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];
/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides
Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/
// var person={
// firstName:function(){first='yasmin',}
// };
var person=[{name:{first:'John',last:'hob'},age:35},
			{name:{first:'Alex',last:'Mercer'},age:25},
			{name:{first:'Alice',last:'Zaheer'},age:24},
			{name:{first:'Zues',last:'Odin'},age:55},
			{name:{first:'Soso',last:'Al-Amora'},age:67}]
person[0].name;
person[0].age;
function firstName(){
for(i=0;i<person.length;i++){
console.log(person[i].name.first);}}
firstName();
---------------------------------------------------------------------
/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons
Ex: averageAge(persons) => 41.2
*/
var person=[{name:{first:'John',last:'hob'},age:35},
			{name:{first:'Alex',last:'Mercer'},age:25},
			{name:{first:'Alice',last:'Zaheer'},age:24},
			{name:{first:'Zues',last:'Odin'},age:55},
			{name:{first:'Soso',last:'Al-Amora'},age:67}]
function averageAge(){
	var sum=0;
	for(i=0;i<person.length;i++){
	sum=sum+person[i].age;}
	avg=(sum/person.length);
	console.log(avg);
}
---------------------------------------------------------------------
/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person
Ex: olderPerson(persons) => "Soso Al-Amora"
*/
var person=[{name:{first:'John',last:'hob'},age:35},
			{name:{first:'Alex',last:'Mercer'},age:25},
			{name:{first:'Alice',last:'Zaheer'},age:24},
			{name:{first:'Zues',last:'Odin'},age:55},
			{name:{first:'Soso',last:'Al-Amora'},age:67}]

function olderPerson(){
	var name;
	var old=person[1].age;
	for(i=1;i<person.length;i++){
	if(old<person[i].age){
		old=person[i].age;
		name=person[i].name.first+person[i].name.last;
	}
}
return name;
}
olderPerson();
-------------------------------------------------------------
/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name
Ex: longestName(persons) => "Soso Al-Amora"
*/
var person=[{name:{first:'John',last:'hob'},age:35},
			{name:{first:'Alex',last:'Mercer'},age:25},
			{name:{first:'Alice',last:'Zaheer'},age:24},
			{name:{first:'Zues',last:'Odin'},age:55},
			{name:{first:'Soso',last:'Al-Amora'},age:67}]
function longestName(){
	var name=name=person[0].name.first+person[0].name.last;
	
	var long1=person[0].name.first.length;
	var long2=person[0].name.last.length;
	var long=long1+long2;
	var per1=0;
	var per2=0;
	var per=0;
	for(i=1;i<person.length;i++){
		 per1=person[i].name.first.length;
		 per2=person[i].name.last.length;
		 per=per1+per2;
	if(long<per){
		name=person[i].name.first+person[i].name.last;
	}
}
return name;
}	
longestName();
-----------------------------------------------------------
/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name
Ex: longestName(persons) => "Soso Al-Amora"
*/
It is a repetitive exercise
-----------------------------------------------------------
/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??
Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/

var strings="My name is alex mercer class name B baba mama hello Hello HELLO";
function repeatWord (str){
  var newString=str.toLowerCase();
  var splitString = newString.split(' ');
  var keys=[];
  var values=[];
  for(i=0;i<splitString.length;i++){
    var count= 0;
    keys[i]=splitString[i];

    for(j=0;j<splitString.length;j++){
      if(splitString[i]==splitString[j]){
        count=count+1;
      }
    }values[i]=count;
  }var newObject = {};
  keys.forEach((key,i)=>newObject [key]=values[i]);
  return newObject;
}
console.log(repeatWord (strings));

-----------------------------------------------------
/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??
Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/

function repeatWord (str){
  var newString=str.toLowerCase();
  var splitString = newString.split('');
  var keys=[];
  var values=[];
  for(i=0;i<splitString.length;i++){
    var count= 0;
    keys[i]=splitString[i];

    for(j=0;j<splitString.length;j++){
      if(splitString[i]==splitString[j]){
        count=count+1;
      }
    }values[i]=count;
  }var newObject = {};
  keys.forEach((key,i)=>newObject [key]=values[i]);
  return newObject;
}
console.log(repeatWord ("mamababatetacedo"));
----------------------------------------------------------

/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array
Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/

function selectFromObject1(obj, arr) {
  var objNew = {}
  for (i = 0; i < arr.length; i++) {
    for (var key in obj) {
      if (arr[i] === key) {
        objNew[arr[i]] = obj[key]
      }
    }
  }
  return objNew
}
console.log(selectFromObject1({
  a: 1,
  cat: 3,
  faaa: 5
}, ['a', 'cat', 'yasmin']))
-----------------------------------------------------------
/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object
Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/
 var obj={
  firstName: "Moh",
  age: 24,
  sport: 'football',
  tall:170,
  movies:['the revenant', 'pain and gain']
}

function objectToArray(obj){
  var arr = [];
  for(key in obj){
    arr.push(key, obj[key]);
  }
  return arr;
}
console.log(objectToArray({firstName:"Moh",age:24}));
--------------------------------------------------------------

/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object
Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/
function arrayToObject(arr){
  var obj={};
  for (i=0;i<arr.length;i++){
    obj[arr[i]]=arr[++i];
  }
  return obj;
}
----------------------------------------------------------------
/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable
Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/
function onlyNumber(obj){
  var newObj={};
  for(key in obj){
    if(typeof(obj[key])=='number'){
      newObj[key]=obj[key];
    }
  }
  return newObj;
}
------------------------------------------------------------------
/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable
Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/
function onlyString(obj){
  var newObj={}
  for(key in obj){
    if(typeof(obj[key])=='string'){
      newObj[key]=obj[key]
    }
  }
  return newObj;
}
------------------------------------------------------------------
/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable
Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/
function onlyArray(obj){
  var newObj={};
  for(key in obj){
    if(typeof(obj[key])=='object'){
      newObj[key]=obj[key]
    }
  }
  return newObj;
}
-------------------------------------------------------------------
/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object
Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']
*/

function  keysArray(obj){
  var arr=[]
  for(key in obj){
    arr.push(key);
  }
  return arr;
}
-------------------------------------------------------------------
/*
16
Create a function called valuesArray
that accept an object
and return an array have the values inside this object
Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ["Moh", 24, [1,5,"string"]]
*/
function valuesArray(obj){
  var arr=[]
  for (key in obj){
    arr.push(obj[key]);
  }
  return arr;
}
valuesArray({firstName:"Moh",age:24,movies:[1,5,"string"]});
------------------------------------------------------------------
/*
17
make this object => {a:1,b:3,c:4}
to be this object {a:4,c:66}
**hint: Search on MDN how to remove a key/value from an object
*/
var obj={ a:1,b:3,c:4}
delete obj.b;
obj.a=4;
obj.c=66;
console.log(obj)
-------------------------------------------------------------------
/*
18
Create a function called objectLength
that accept an object
and return the number of keys inside this object
Ex: keysArray({a:1,b:2,c:3,d:4})
=> 4
*/
function objectLength(obj){
  var count=0;
  for(key in obj){
    count++;
  }
  return count;
}
objectLength({a:1,b:2,c:3,d:4});
---------------------------------------------------------------------
/*
19
Create a function called evenValue
that accept an object
and return a new object that have only the key/values if the value
 is even
Ex: evenValue({a:1, b:2, c:3, d:4})
=> {b:2, d:4}
*/
function evenValue(obj){
  var newObj={};
  for(key in obj){
    if(obj[key]%2==0){
      newObj[key]=obj[key]
    }
  }
  return newObj;
}
--------------------------------------------------------------------
/*
20
Create a function called longestKey
that accept an object
and return the value inside the longest key
Ex: evenValue({car:1, school:2, monster:3, alexMercer:4})=> 4
*/
function longestKey(obj){
  var long='0' ;
  for(key in obj){
    if(key.length>long.length){
      long=key;
    }
  }
  return obj[long];
}
longestKey({car:1, school:2, monster:3, alexMercer:4});