//PROMISES


(function(){

function callback(){
	console.log("coming from a callback");
}

function higherOrder(fn){
	console.log("about to call a callback");
	fn(); //callback function is invoked;
	console.log("callback has been invoked");
}


//higher order function is a function that accepts a callback as a parameter;


//this is without callbacks
function sendMessage(message){
	console.log(message);
}
function sendMessageAlert(message){
	alert(message):
}
function sendMessageConfirm(message){
	return confirm(message);
}
sendMessage("Lots of Duplications");
sendMessageAlert("This is a lot of duplicates");
sendMessageConfirm("Are you sure you want to do it like this?");


function saythis(){
	return "this ";
}

function saythat(){
	return "that ";
}

function sayhat(){
	return "hat ";
}

function dostuff(fn, fn2, fn3){
	var fn = fn();
	var fn2 = fn2();
	var fn3 = fn3();
	return fn + " " + fn2 + " " + fn3

}

var dostuff = dostuff(saythis, saythat, sayhat);

//This is with callbacks
function sendMessage(message, callback){
	return callback(message);
}
sendMessage("Message for console", console.log);
sendMessage("Message for alert", alert);
sendMessage("Are you sure", confirm);


function greet(name, formatter){
	return "Hello, " + formatter(name);
}

function upperCaseName(name){
	return name.toUpperCase();
}

greet("Tim", upperCaseName);




function forEach(array, callback){
  for(var i = 0; i < array.length ; i++){
  	callback(array[i], i, array);
  }
};

function findIndex(array, callback){
	for(var i = 0; i < array.length; i++){
		if(callback(array[i], i, array)){
			return true;
		}
	}
	return false;
}


function callback(){
	console.log("callbcak function)");
}
var delay = 1000;

var timer1 = setTimeout(function() {
	console.log('runs in 1 second')
}, delay);


setTimeout(function(){
	console.log("this clears the 1 second timeout");
	clearTimeout(timer1);
}, 999);


var mynum = 0;
var myInterval = setInterval(function(){
	mynum++;
	if(mynum === 10){
		clearInterval(myInterval);
	};

}, 1000);


//Promise with resolve only
var promise1 = new Promise(function(resolve, reject){
	resolve([1,2,3,4]);
});

promise1.then(function(arr){
	console.log("Promise1 was resolved with data: ", arr);
});

//Promise with reject
var promise2 = new Promise(function(resolve, reject){
	reject("ERROR");
});

promise2.then(function(data){
	console.log("Promise p2 was resolved with data: ", data);
}).catch(function(function(data){
	console.log("Promise was rejected with data ", data);
});


//Promise with both resolve and reject paramters
var promise3 = new Promise(function(resolve, reject){
	var num = Math.random();
	if(num < 0.5){
		resolve(num);
	} else {
		reject(num);
	}
});

promise3.then(function(result){
	console.log("success: ", result);
}).catch(function(error){
	console.log("error: ", error);
});


//Promise with setTimout that will get called later
var promise4 = new Promise(function(resolve, reject){
	setTimeout(function(){
		var randomInt = Math.floor(Math.random() * 10);
		resolve(randomInt);
	}, 4000);
});


promise.then(function(data){
	console.log("Random int passed into resolve: ", data);
});


//Promise Chaining
var chainPromise = new Promise(function(resolve, reject){
	setTimeout(function(){
		randomInt = Math.floor(Math.random()*10);
		resolve(randomInt);
	}, 500);
});

promise.then(function(data){
	console.log("Random int passed into resolve:", data);
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			resolve(Math.floor(Math.random()*10));
		}, 3000);
	}).then(function(data){
		console.log("second random int passed into resolve:", data);
	});
});


//passing data through promises
var chainPromise2 = new Promise(function(resolve, reject){
	resolve(5);
});

chainPromise2.then(function(data){
	return data * 2;
}).then(function(data){
	return data + 20;
}).then(function(data){
	console.log(data);
});


//Callbacks Version
var counter = 0;
setTimeout(function(){
	counter++;
	console.log("counter:", counter);
	setTimeout(function(){
		counter++;
		console.log("counter:", counter);
		setTimeout(function(){
			counter++;
			console.log("counter:" counter);
		}, 3000);
	}, 2000);
}, 1000);


//Promise Version
var counter = 0;
function incCounter(){
	counter++;
	console.log("counter:", counter);
}

function runLater(callback, timeInMs){
	var promise = new Promise(function(resolve, reject){
		setTimeout(function(){
			var res = callback();
			resolve(res);
		}, timeInMs);
  });
	return promise;
}

runLater(inCounter, 1000).then(function(){
	return runLater(incCounter, 2000);
}).then(function(){
	return runLater(incCounter, 3000);
});

//More Promises

var counter = 0;
function runPromise(){

  var promise = new Promise(function(resolve, reject){
  var randnum = Math.floor(Math.random() * 11);
  if(randnum > 5){
	resolve(randnum);
	counter = 0;
  } else {
	reject("number was not greater than 5");
	counter++
  }

});

promise.then(function(data){
	console.log(data);
	return data * 100
  }).then(function(data){
	console.log(data);
  }).catch(function(err){
	console.log(err);
	if(counter >= 5){
		clearInterval(myInterval);
		console.log('interval cleared');
	}
  });
}



var p = new Promise(function(resolve, reject){
var num = Math.floor(Math.random()*11);
  if(num > 5){
    resolve(num)
  } else {
    reject('num does not exist');
  }
});

p.then(function(data){
  return data;
  console.log(data);
}).catch(function(data){
  console.log(data);
  return(data);
});


var myInterval = setInterval(function(){
	 runPromise();
}, 500);

function modify(selector, fn, modify){
	$("\"\."+selector+"\"").fn("\""+modify+"\"");
}

$(document).click(function(){
	modify(title, toggleClass, red);
});


//Even More Promises

var userInput = function(userin){
	var userin = userin;
	console.log(userin);
	return new Promise(function(resolve, reject){
		if(typeof userin === "number"){
		  resolve(userin * 4);
		} else {
			reject('you did not supply a integer number');
		}
	});
}

function runit(input){
	userInput(input).then(function(data){
 	return data + 4;
  }).then(function(data){
	console.log(data);
  }).catch(function(data){
	console.log(data);
  });

}




})();
