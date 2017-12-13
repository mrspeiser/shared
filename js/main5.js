//More OOP

function House(bedrooms, bathrooms){
	this.bedrooms = bedrooms;
	this.bathrooms = bathrooms;
}

function Apartment(bedrooms, bathrooms){
	House.call(this, bedrooms, bathrooms);
}

function Condo(){
	House.apply(this, arguments);
}



Person.__proto__ = Person.prototype;



Person.prototype.sayHi = function(){
	return this.name + " says hello."
}


function Vehicle(make, model, year){
	this.make = make;
	this.model = model;
	this.year = year;
	this.isRunning = false;
}

Vehicle.prototype.turnOn = function(){
		this.isRunning = true;
	};

Vehicle.prototype.turnOff = function(){
		this.isRunning = false;
	};

Vehicle.prototype.honk = function(){
	if(this.isRunning){
		return "beep";
	};



Vehicle.prototype.addToFamily = function(car){
	if(this.cars.indexOf(car) === -1 && car instanceOf Vehicle){
		return this.cars.push(car);
	}
	return this.cars.length;
}


Array.prototype.map = function(callback){
	var newArr = [];
	for(var i=0; i<this.length; i++){
		newArr.push(callback(this[i], i, this));
	}
	return newArr;
}

String.prototype.reverse = function(){
	var newStr = '';
	for(var i=this.length - 1; i >=; i--){
		newStr += this[i];
	}
	return newStr;
}


function Person(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;
}

function Student(firstName, lastName){
	return Person.apply(this, arguments);
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor; // Currently Person;
Student.prototype.constructor = Student;



function Automobile(make, model, year){
	this.make = make;
	this.model = model;
	this.year = year;
	this.numWheels = 4;
}

function Motorcycle(make, model, year){
	Car.call(this, make, model, year);
	this.numWheels = 2;
}





//Array Methods

//map creates a new array
//iterates through an array
//runs a callback function for each value in the array


var arr = [1,2,3];

arr.map(function(value, index, array){
	return value * 2;
});

function map(array, callback){
	var newArr = [];
	for(var i = 0; i < array.length; i++){
		newArr.push(callback(array[i], i, array));
	}
	return newArr;
}

function tripleValues(arr){
	return arr.map(function(value){
		return value * 3;
	});
}

tripleValues([1,2,3])


function onlyFirstName(arr){
	return arr.map(function(val){
		return val.first;
	}); 
}


function getKeys(arr){
	return arr.map(function(val){
		return val[key];
	});
}

function getPropValues(arr){
	return arr.map(function(val){
		return val.prop + " " val.prop2;
	});
}


//filter

//creates a new array
// interates through an array
// runs a callback function on each value
// if the callbcak returns true, that value will be added to the array
// if the callbcak returns false that value will be ignored

var arr = [1,2,3];

arr.filter(function(value, index, array){
	//no need for an if statement
	// just returns an expression

	return value > 2;
});

function filter(array, callback){
	var newArr = [];
	for(var i = 0; i<array.length; i++){
		if(callback(array[i], i, array)){
			newArr.push(array[i]);
		}
	}
	return newArr;
}

function onlyFourLeeterNames(arr){
	return arr.filter(function(value){
		return value.length === 4;
	});
}
onlyFourLeeterNames(['Rusty', 'Matt', 'Moxie', 'colt'])



function divisibleByThree(arr){
	return arr.filter(function(value){
		return value % 3 === 0;
	});
}

divisibleByThree([1,2,3,4,5,6,7,8,9]);



//REDUCE

var names = ['Tim', 'Matt', 'Colt', 'Elie'];

names.reduce(function(accumulator, name){
	return accumulator += ' ' + name;
}, 'The instructors are');



var arr = [5,4,3,2,1];

arr.reduce(function(accumulator, nextValue){
	if(nextValue in accumulator){
		accumulator[nextValue]++;
	} else {
		accumulator[nextValue] = 1;
	}
	return accumulator;
}, {});


function sumOddNumbers(arr){
	return arr.reduce(function(accumulator, nextValue){
		if(nextValue % 2 !== 0){
			accumulator += nextValue;
		}
		return accumulator;
	});
}



