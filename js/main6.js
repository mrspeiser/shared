// A closure is a function that makes use
// of variables defined in our outer functions that
// have previously returned


function outer(){
	var start  = "Closures are";
	return function innter(){
		return start + " " + "awesome"
	}
}

outer()
function inner(){
	return start + " " + "awesome";
}

function anotherOuter(a){
	return function innerb(b){
		return a+b;
	}
}

anotherOuter(5)(5); // We have to 'return the inner function for this to work';
var storeOuter = anotherOuter(2);
storeOuter(10); //15



//only variables used in inner function are remembered

function outerFn(){
	var data = 'something from outerFn';
	var fact = "remember me!";
	return function innerFn(){
		debugger
		return fact
	}
}

function returnName(name){
	return function(){
		var name = name;
		return "My name is "+name;
	}
}

returnName()();
var string1 = returnName("matt")(); 

var newName = returnName();
var string = newName("matt");

string1 === string


//Create private varaibles for functions
//This is a common use case for closure.
function counter(){  
	var count = 0;
	return function(){
		count++;
		return count;
	}
}

var counter1 = counter();
counter1(); //1
counter1(); //2


var counter2 = counter(); //this will run independently
counter2(); //1
counter2(); //2

//both these variables run independently

count; // this will return undefined because it is private;


function classRoom(){
	var instructors = ["Elie", "Colt"];
	return {
		getInstructors: function(){
			return instructors;
		},
		addInstructors: function(instructor){
			instructors.push(instructor);
			return instructors
		}
	}
}

var classroom1 = classRoom();
classroom1.getInstructors();
classroom1.addInstructors('Matt');
classroom1.addInstructors('Tim');

classroom2.addInstructors('New');
classroom2.getInstructors();

function classRoom(){
	var instructors = ["Elie", "Colt"];
	return {
		getInstructors: function(){
			return instructors.slice();
		},
		addInstructors: function(instructor){
			instructors.push(instructor);
			return instructors.slice();
		}
	}
}


//THIS

 console.log(this); // refers to the window object

 var instructor = "Elie";
 window.instructor === instructor; // True

var data = {};
data.string = "My String";

function whatIsThis(){
	return this;
}
whatIsThis(); // still the window

function variablesInThis(){
	this.person = "matt"
}

variablesInThis(); // keyword 'this' inside function is still the window


"use strict"

console.log(this); //window

function whatIsThis(){
	return this;
}

whatIsThis(); //undefined


var person = {
	firstname: "Matt",
	sayHi: function(){
		return "Hi " + this.firstname;
	},
	determineContext: function(){
		return this === person;
	}
}

var person = {
	firstName: "Alex",
	determineContext: this
}

person.determineContext; //window (not person object);

var person = {
	firstName: "Colt",
	sayHi: function(){
		return "Hi " + this.firstname;
	},
	dog: {
		sayHello: function(){
			return "hello " + this.firstname;
		},
		determineContext: function(){
			return this === person;
		}
	}
}


// Using "CALL" to set value of this

person.dog.sayHello.call(person); //"Hello Colt";
person.dog.determineContext.call(person); //true



// Using call eliminates code duplication
call(thisArg, parameters //you want to pass to function that you are changing the value of the keyword this in// 
)


var colt = {
	firstName: "Colt",
	sayHi: function(){
		return "Hi " + this.firstName;
	}
}

var elie = {
	firstName: "Elie"
}

colt.sayHi();
colt.sayHi.call(elie); //Hi Ellie


//call is a great way to call values from objects and use
// in functions not defined inside the scope of object
function sayHi(){
	return "Hi " + this.firstName;
}

var colt = {
	firstName: 'Colt'
}

var elie = {
	firstName: 'Elie'
}

sayHi.call(colt);
sayHi.call(elie);


var divs = getElementsByTags('div');
var divsArray = [].slice.call(divs);
divsArray.filter(function(val){
	return val.innerText === 'Hello';
});
Array.prototype.slice.call(divs);

 

// Using "APPLY"

apply(thisArg, [array,of,arguments]);
// Use Apply when:
// A function does not accept an array
// apply(thisVal, []); will spread out values in an array
// for us automagically

function addNumbers(a,b,c,d){
	return this.firstname + " just calculated " + (a+b+c+d);
}
 var colt = {
 	firstname: "Colt"
}

var elie = {
	firstname "Elie"
}

addNumbers.apply(elie, [1,2,3,4]);

var nums = [4,6,1,9,5,3];
Math.max(nums); // NaN
Math.max.apply(this, nums); // 9





// Using "BIND"
// The parameter works like call but bind returns a function with the context of 'this'
// bound already!

function addNumbers(a,b,c,d){
	return this.firstName + " just calculated " + (a+b+c+d);
}

var elie = {
	firstName: "Elie"
}

var eliecalc = addNumbers.bind(elie,1,2,3,4); //function(){}.....
elieCalc(); // Elie just calculated 10

var elieCalc = addNumbers.bind(elie,1,2);
elieCalc(3,4);


var colt = {
	firstName: "Colt",
	sayHi: function(){
		setTimeout(function(){
			console.log("Hi " + this.firstname); 
		} ,1000)
	}
}
//'this' refers to window because setTimeout is called later point in time 
// setTimeout is method of/in global, window, context.
var colt = {
	firstName: "Colt",
	sayHi: function(){
		setTimeout(function(){
			console.log("Hi " + this.firstname); 
		}.bind(this),1000)
	}
}



//Exercises


function arrayFrom(arrayLikeObject){
	return [].slice.call(arrayLikeObject);
}

function sumEvenArguments(){
	var newArgs = [].slice.call(arguments);
	return newArgs.reduce(function(acc,next){
		if(next % 2 === 0){
			return acc+next;
		}
		return acc;
	}, 0)
}