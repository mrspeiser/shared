//ES2015 



//const is an alternative to var keyword

const num = 1;
const arrC = [1,2,3,4]
//still able to manipulate and add to this

for(let i=0; i<5; i++){
	setTimeout(function(){
		console.log(i);
	},1000)
}



//Template Strings
var firstname = "Matthew";
var lastname = "Speiser";


console.log(`Hello ${firstname} ${lastname}`);

`
Hello
How
Nice
is
This!
`

//Arrow Functions
var add = function(a,b){
	return a+b;
}

var add = (a,b) => {
	return a+b;
}

var add = (a,b) => a+b

[1,2,3].map(value => value * 2);



function doubleAndFilter(arr){
	return arr.map(function(value){
		return value * 2;
	}).filter(function(value){
		return value % 3 === 0;
	});
};

// arrow functions
var doubleAndFilter = arr.map(val => val * 2).filter(val => val % 3 === 0);


var instructor = {
	firstname: "Matt",
	sayHi: function(){
		setTimeout(function(){
			console.log("Hello " + this.firstname);
		}.bind(this), 1000);
	}
}
instructor.sayHi(); // "Hello Elie"

var instructor = {
	firstname: "Matt",
	sayHi: function(){
		setTimeout(() => {
			console.log("Hello " + this.firstname);
		}, 1000);
	}
}

//default values



//for of loop

var arr = [1,2,3,4,5];

for(let val of arr){
	console.log(val);
}

//Rest Operator

function printArguments(a,b,...c){
	console.log(a);
	console.log(b);
	console.log(c);
}

printArguments(1,2,3,4,5);

function sumArguments(){
	var total = 0;
	for(var i = 0; i< arguments.length; i++){
		total += arguments[i];
	}
	return total;
}

function sumArguments(){
	var argumentsArray = [].slice.call(arguments);
	return argumentsArray.reduce(function(accumulator, nextValue){
		return accumulator + nextValue;
	});
}

var sumArguments = (...args) => args.reduce((acc, next) => acc + next);


//Spread

var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [7,8,9];
var combined = arr.concat(arr2).concat(arr3);
// ES2015 Version:
var combined = [...arr1, ...arr2, ...arr3];


Math.max.apply(this, arr);

Math.max(...combined);

function sumValues(a,b,c){
	return a+b+c;
}

var nums = [12,15,20];

sumValues.apply(this, nums);

sumValues(...nums);
//ES2016 & 2017



function filter(arr, callback){
	var newArr = [];
	for(var i=0; i<arr.length; i++){
		if(callback(arr[i], i, arr)){
			newArr.push(arr[i]);
		}
	}
}












