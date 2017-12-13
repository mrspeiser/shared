(function(){

var myString = "string";
var myinteger = 1;
var bool = true;

var nums = [0,1,2,3,4,5];

var person = {
	name: "Matthew",
	age: 26,
	sayname: function(){
		return document.write("hi my name is ")+this.name;
	}
}

//Constructor Function
function Car(name, make){
	this.name = name;
	this.make = make;
	this.rev = function(){
		return document.write("Vroom Vroom!");
	}
}

//new instance of Car
var Honda = new Car("Honda");

//Change the name property of an Object
function changeName(car, newname){
	car.name = newname;
}

//call the rev function from Car constructor.
//Honda.rev();

//Add prototype to Car
Car.prototype.cost = "";

//Add cost to Honda Instance from prototype
Honda.cost = "22000";

//loop through properties and value of Honda instance
for(var prop in Honda){
	console.log( prop + " " + Honda[prop]);
};

//add inArray function to the Array built-in prototype
Array.prototype.inArray = function inArray(value){
	for(var i=0; i<this.length; i++){
		if(this[i] == value){
			return true;
		}
	}
	return false;
}

Honda.hasOwnProperty("cost");
//this is false because cost is on Car.prototype.


function SecretCode(){
	var SecretNum = 87;
	//this is private;
}

SecretCode.prototype.getSecret = function(){
	return this.secretNum;
}
//this is undefined


//A Normal Object with a getter and setter
var address = {
	street: "No Street",
	city: "No city",
	state: "No State",

	get getAddress(){
		return this.street + ", " + this.city + ", " + this.state;
	},

	set setAddress(theAddress){
		var parts = theAddress.toString().split(",");
		this.street = parts[0] || "";
		this.city = parts[1] || "";
		this.state = parts[2] || "";
	}
}

//set address with setter
address.setAddress = "123 main St, Pittsburgh, PA";

//get address with the getter
console.log("Address: " + address.getAddress);

//Depreciated way of getters and setters
function Coordinates() {
	this.latitude = 0;
	this.longitude = 0;
}

Object.__defineGetter__.call(Coordinates.prototype, "getCoords", function(){
	return "Lat : " + this.latitude + " Long : " + this.longitude;
});

//this still works but is not the most efficient way
Object.__defineSetter__.call(Coordinates.prototype, "setCoords", function(coords){
    var parts = coords.toString().split(", ");
    this.latitude = parts[0] || "";
    this.latitude = parts[1] || "";
});

var testCoords = new Coordinates();
testCoords.setCoords = " 40.11, 88.09";
console.log("Coordinates: " + testCoords.getCoords);


//One of the most current ways to define getters and setters on objects
function Point(){
	this.xPos = 0;
	this.yPos = 0;
}

//define property on the Object prototype. Setting them both at the same time.
Object.defineProperty(Point.prototype, "PointPos", {
	get: function(){
		return "X : "+this.xPos + " Y : " this.yPos;
	},
	set: function(point){
		var parts = point.toString().split(", ");
		this.xPos = parts[0] || '';
		this.yPos = parts[1] || '';
	}
});

var aPoint = new Point();
aPoint.PointPos = "200, 400";
console.latitude("Position : " , aPoint.PointPos);


//Most up to date way to define Getters and Setters
var Circle = function(radius){
	this._radius = radius;
}

Circle.prototype = {
	set radius(radius) {this._radius = radius},
	get radius() { return this._radius; },
	get area() {return Math.PI * (this._radius * this._radius);} 
};

var circ = new Cirlce(10);

circ.radius = 15;


//inheritance

function Animal(){
	this.name = "Animal";
	this.toString = function(){
		return "My name is " + this.name;
	}
}

function Canine(){
	this.name = "Canine";
}

function Wolf(){
	this.name = "Wolf";
}

Canine.prototype = new Animal();
Wolf.prototype = new Canine();

Canine.prototype.constructor = Canine;
Wolf.prototype.constructor = Wolf;

var articWolf = new Wolf();

console.log(articWolf.toString());
console.log(articWolf instanceof Animal);
//returns true

Animal.prototype.sound = "Grrrrrr";
Animal.prototype.getSound = function(){
	return this.name + " says: " this.sound;
}

Canine.prototype.sound = "Woof!";
Wolf.prototype.sound = "grrrr Woof!";



function Rodent(){
	this.name = "Rodent";
}

function Rat(){
	this.name = "Rat";
}

Rodent.prototype = new Animal();
Rat.prototype = Rodent.prototype; 
//Rodent.prototype is the entire prototype object being attached to the child prototype;
Rodent.prototype.constructor = Rodent;
Rat.prototype.constructor = Rat;
//then we reset the child to make sure it's still itself


function extend(Child, Parent){
	var Temp = function(){};
		Temp.prototype = Parent.prototype;
		Child.prototype = new Temp;
		Child.prototype.constructor = Child;
}


function Deer(){
	this.name = "Deer";
	this.sound = "Snort";
}

extend(Deer, Animal);

var elk = new Deer;


function Vehicle(name){
	this.name = "Vehicle";
}

Vehicle.prototype = {
	drive: function(){
		return this.name + " drives forwards";
	},
	stop: function(){
		return this.name + " stops";
	}
}

function Truck(name){
	this.name = name;
}

Truck.prototype = new Vehicle;
Truck.prototype.constructor = Truck;
Truck.prototype.drive = function(){
	var driveMessage = Vehicle.prototype.drive.apply(this);
	return driveMessage += " through a field";
}

var jeep = new Truck("Jeep");
console.log(jeep.drive());
console.log(jeep.stop());





//TEST YOUR KNOWLEDGE PART 2
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////





function Constructor(){
	this.name = name;
	this.sayName = function(){
		return "Hi my name is "+this.name;
	}
	this.object = {
		key1 : "value 1",
		key2 : "value 2",
		key3 : "value 3"
	}
}

var myconstructor = new Constructor();

Constructor.prototype.gender = "Male";


console.log(myconstructor.hasOwnProperty('gender'));

Constructor.prototype.addNums = function(num1, num2){
	return num1 + num2;
}


Array.prototype.inArray = function inArray(val){
	for(var i=0;i<this.length;i++){
		if(this[i]===val){
			return true;
		}
	}
	return false;
}

function secretVar(){
	var secretNum = 23432;

	this.sayNum = function(){
		return "Secret Num is " + secretNum;
	};

	this.guessNum = function(guess){
		if(guess < secretNum){
			return "Guess is too Low";
		} else if(guess > secretNum) {
			return "Guess is too High";
		} else {
			return "You got it!";
		}
	};
}

var secret = new secretVar;

newArray = [10, 11, 12, 123, 123213, 123123123];

Array.prototype.returnReverse = function returnReverse(){
	for(var i = this.length-1; i >= 0; i--){
		this[i];
		console.log(this[i]);
	}
}
newArray.returnReverse();


function Document(){
	this.name = name;
	this.sections = sections;
	this.getSections = function getSections(){
		return this.sections;
	}

}

function Article(name){
	this.name = name;
}

function Picture(){
	this.name = name;
}



Article.prototype = new Document();
Picture.prototype = new Document();
Article.prototype = Picture.prototype;;


Article.prototype.constructor = Article;
Picture.prototype.constructor = Picture;




Object.defineProperty(Document.prototype, "doc", {
	get: function(){
		return this.name + " " + this.sections
	},
	set: function(set){
		var parts = set.toString().split(", ");
		this.name = parts[0] || "";
		this.sections = parts[1] || "";
	}
});

Object.defineProperty(Article.prototype, "article", {
	get: function(){
		return this.name;
	},
	set: function(set){
		var parts = set.toString().split(", ");
		this.name = parts[0] || "";
	}
})

var article = new Article;
var mydoc = new Document;

var interval = ;





})();
