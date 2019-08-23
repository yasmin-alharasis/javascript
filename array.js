console.log("Here is : ", "array");

/*
1
Correct the syntax error
 [ 1,7  9  45, ]
 ["Str" "alex","moh"
 'the','fox' 'over' lazy, 'dog',  ]
*/
 [ 1,7,  9 , 45 ]
 ["Str" "alex","moh"]
 [ 'the','fox', 'over', 'lazy', 'dog'  ]


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
*/
Banana=> fruits[0]
Tomato=> fruits[1]
/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
Food=['molo5eh' ,'mansaf','bameye','uzi','ma7ashi']
Sport=['football' ,'swimiing','runiing']
Movie=['the loard of the rings' ,'sandrela','harrybooter','snowden']

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
arr=[1,4,5];
function firstOfArray(arr){
	console.log	(arr[0])
}

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array
Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastOfArray(arr){
	let length=arr.length
	return (arr[length-1])
	}
/* 
6
Using console make this array to be like this one (push, unshift, shift, pop)
var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var arr=[0,5,7,9];
arr.shift()
arr.shift()
arr.shift()
arr.unshift(1,3,4,6,8)
arr.push(10)
/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you
var array2 = [5,9,-7,3.5]
*/
push//increment in the end of array
unshift//increment in the first of array
shift//decrement in the first of array
pop//decrement in the end of array
var array2 = [5,9,-7,3.5]
array2.unshift(2);//[2, 5, 9, -7, 3.5]
array2.push(2);//[5, 9, -7, 3.5, 2]
array2.shift();//[9, -7, 3.5]
array2.pop();//[5, 9, -7]
/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets
Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(arr){
	var length =arr.length
	if(length%2==1){
		var n=(arr.length-1)/2;
		console.log(arr[n]);
	}
	else{
		var n=length/2
		console.log(arr[n-1],arr[n]);
	}
}

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something
var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird']
animals.push('zebra')
animals.push('elephant')
/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index
var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9
**try more cases by your self
*/
function indexOfArray(arr,index){
	return arr[index]
}

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]
**try more cases by your self
*/
function arrayExceptLast(arr){
	arr.splice(arr.length-1,1)
	return arr
}

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array
var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]
**try more cases by your self
*/
function addToEnd(arr,value){
	arr.splice(arr.length,0,value)
	return arr
}
var nums= [1,2,3,8,9]
addToEnd(nums,55) 
// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array
var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function sumArray(arr){
	var sum=0;
	for(i=0;i<arr.length;i++){
		sum+=arr[i]
	}
	return sum
}

function sumArray(arr){
    var sum = 0;
    i=0;
    while (i< arr.length){
        sum += arr[i];
        i++;
    }
    return sum;
}
/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array
var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function  minInArray(arr){
	var min=arr[0];
	for (i=1;i<arr.length;i++){
		if(arr[i]<min){
			min=arr[i]
		}
		return min
	}
}

function minInArray(arr){
    var min = arr[0];
    i= 1;
    while(i < arr.length){
        if (arr[i] <min){
            min = arr[i];
        }
        i++;
    }
    return min;
}
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it
var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function removeFromArray(arr,ele){
	var arr2=[]
	for(i=0;i<arr.length;i++){
		if(arr[i]!=ele){
			arr2.push(arr[i]);
		}
	}
	return arr2
}

function removeFromArray(arr,ele){
    i = 0;
    while (i < arr.length){
        if (arr[i] == ele){
            var x = arr.splice(i,1);

        }
        i++;
    }
    return arr;
}
/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts
var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray(arr){
	var arr2=[];
	for (i = 0; i < arr.length; i++) {
		if(arr[i]%2==1){
			arr2.push(arr[i])
		}
	}
	return arr2;
}

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array
var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6
var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
	function aveArray(arr){
		var sum=0
		for (i=0;i<arr.length;i++) {
			sum+=arr[i]
		}
		var avg=sum/arr.length;
		return avg;
	}

	function avgArray(arr){
    var avg;
    var sum;
    i=0;
    while (i< arr.length){
        sum+=arr[i];
        i++;
    }
    avg = sum / (arr.length);
    return avg;
}
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
	function shorterInArray(arr){
		var short=arr[0]
		var length=short.length
		for(i=1;i<arr.length;i++){
			if(arr[i].length<length){
				short=arr[i];
			}
		}
		return short;
	}

	function shorterInArray(arr){
    var short = arr[0];
    var i =1;
    while(i < arr.length){
        if(arr[i].length < short.length){
            short = arr[i];
          
        }
        i++;
    }
    return short;
}

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string
var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
	function repeatChar(str,char){
		var num=0;
		for(i=0;i<=str.length;i++){
			if(str[i]==char){
				num++;
		}
			}
			return num;
	}


function repeatChar(str,char){
    var num = 0;
    var i =0;
    while (i <= str.length){
        if (str[i] == char){
            num++;
        }
        i++;
    }
    return num;
}
/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenIndexOddLength(str){
	var arr2=[]
	for(i=0;i<str.length;i++){
		if(i%2==0){
			var length=str[i].length;
			if(length%2==1){
				arr2.push(str[i])
			}
		}

	}
return arr2;
}

function evenIndexOddLength(str){
    var arr2=[];
    i = 0;
    while (i< str.length){
    	if(i%2==0){
    		var length=str[i].length;
			if(length%2==1){
				arr2.push(str[i])
			}
    	}
       i++;
        }
          return arr2;
    }
  

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self
var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
	function  powerElementIndex(arr){
		var arr2=[]
		for(i=0;i<arr.length;i++){
			var power=arr[i]**i;
			arr2.push(power);
		}
		return arr2;
	}


	function  powerElementIndex(arr){
		var arr2=[]
		var i=0;
		while(i<arr.length){
			var power=arr[i]**i;
			arr2.push(power);
			i++
		}
		return arr2;
	}


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index
var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenNumberEvenIndex(nums){
	var arr2=[]
	for(i=0;i<nums.length;i++){
		if(i%2==0){
			if(nums[i]%2==0){
				arr2.push(nums[i])
			}
		}

	}
	return arr2;
}

function evenNumberEvenIndex(nums){
	var arr2=[]
	var i=0
	while(i<nums.length){
		if(i%2==0){
			if(nums[i]%2==0){
				arr2.push(nums[i])
			}
		}

		i++
	}
	return arr2;
}