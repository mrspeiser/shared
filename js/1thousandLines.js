(function(){

var strings = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
function consoleLogEach(arr){
	arr.forEach(function(val){
		console.log(val);
	});
}

function appendTo(el, arr){
	arr.forEach(function(val){
		el.append(val);
	});
}

function emptyString(arr){
	arr.forEach(function(val){
		val = "";
	});
}

function removeVowels(str){
	var newArr = [];
	var vowels = 'aeiou';
	var arr = str.split('')
	arr.forEach(function(val){
		if(vowels.indexOf(val.toLowerCase()) === -1){
			newArr.push(val);
		}
	});
	console.log(newArr);
	return newArr.join('');
}

function removeConsonants(str){
	var newArr = [];
	var vowels = 'aeiou';
	var arr = str.split('');
	arr.forEach(function(val){
		if(vowels.indexOf(val.toLowerCase()) !== -1){
			newArr.push(val);
		}
	});
	return newArr.join('');
}

function returnCopyDate(arr){
    var date = new Date();
    var dateArr = date.toString().split(' ');
    var extension = "-"+dateArr[0]+"-"+dateArr[1]+"-"+dateArr[2]+"-"+dateArr[3]+"-"+dateArr[4];
    var newArr = [];
    arr.forEach(function(val){
      newArr.push(val+extension);
    });
    return newArr;
}

function addArgument(arr, num){
	var newArr = [];
	arr.forEach(function(val){
		newArr.push(val+num);
	});
	return newArr;
}

function addab(a, b){
  return a+b;
}
var add = (a,b) => {
	return a+b;
}
var addab = (a,b) => a+b;

function subtractab(a,b){
	return a-b;
}
var subtract = (a,b) => {
	return a-b;
}
var substractab = (a,b) => a-b;
var replaceBwithA = (a,b) => a = b;


var coordinates = [{x: 11, y: 87}, {x:70, y: 99}, {x: 193, y: 101}];

function modifyCoordinates(arr, key, fn, bArgTofn){
	var newArr = [];
	arr.forEach(function(val){
		var newValForKey = fn(val[key], bArgTofn);
		val[key] = newValForKey
		newArr.push(val);
	});
	return newArr
}
modifyCoordinates(coordinates, 'x', addab, 10);
modifyCoordinates(coordinates, 'y', subtractab, 10);
modifyCoordinates(coordinates, 'y', replaceBwithA, 10);

function modifyCoordinatesInterval(ms, limit, key, fDefntn, b){
  var count = 0;
  var myInterval = setInterval(function(){
    if(count > Math.abs(limit)){
      console.log('finished');
      clearInterval(myInterval)
      } else {
        console.log(count);
        modifyCoordinates(coordinates, key, fDefntn, b);
        count++
      }
	},ms);
}
modifyCoordinatesInterval(10, 300, 'x', substractab, 21);
modifyCoordinatesInterval(10, 300, 'x', addab, 30);

function myStopFunction(myvar) {
    clearInterval(myvar);
}


function addAwesome(arr){
	return arr.map(function(val){
		return val + " awesome";
	});
}

function getSrc(el){
	var arr = [].slice.call(el);
	return arr.map(function(val){
		return val.attr('src');
	});
}

function mapInnerText(el){
	var arr = [].slice.call(el);
	return arr.map(function(val){
		return val.text();
	});
}

function mapNum0toObj(arr, key){
	return arr.map(function(val){
		val[key] = 0;
		return val
	});
}

function mapKeyToVal(arr, key){
	return arr.map(function(val){
		return val[key]
	});
}

function filterNums(arr){
	return arr.filter(function(val){
		return typeof val !== 'number';
	});
}

function onlyNums(arr){
	return arr.filter(function(val){
		return typeof val === 'number';
	});
};

function returnMatches(arr, term){
	return arr.filter(function(val){
		var modVal = val.toLowerCase();
		return modVal.match(term);
	});
}

function filterKeyValue(arr, key, num){
	return arr.filter(function(val){
		return val[key] > num
	});
}

function doubleOddNumbers(arr){
  return arr.filter(function(val){
  	return val % 2 !== 0;
  }).map(function(val){
  	return val * 2;
  });
}


function reduce(arr, acc){
	return arr.reduce(function(acc, nextVal, index, arr){
		return acc+nextVal
	}, acc);
}

function findNumOfDuplicates(arr){
	return arr.reduce(function(acc, nextVal){
		if(nextVal in acc){
			acc[nextVal]++;
		} else {
			acc[nextVal] = 1;
		}
		return acc;
	}, {});
}


function addValToKey(arr, key){
	return arr.map(function(val, index, arr){
		return {key: val}
	});
}


function addKeyToValue(arr, key){
	return arr.reduce(function(acc, nextVal, index){
		acc.push({});
		acc[index][key] = nextVal;
		return acc;
	}, []);
}

//Closure
function counter(){
	var counter = 0;
	return function inner(){
		counter++
		return counter
	}
}

function another(arr){
	var newArr = [];
	return function inner(arr){
		arr.forEach(function(val){
			val.push(newArr);
		});
	}
}

function classroom(){
	var students = ['Matt','Sami','Derek','Ryan','Kumar','Oliver','Tim','Frank','Nathan'];
	return {
		getStudents: function(){
			return students.slice();
		},
		addStudents: function(student){
			students.push(student);
			return students.slice();
		} 
	}
}

function modifyDataArrOfNums(arr){
  var data = arr;
  var counter = 0;
  return {
  	showData: function(){
  		return data.slice();
  	},
  	showCounter: () => counter,
  	resetCounter: () => counter=0,
  	addData: (val) => {
  		data.push(val) 
  		return data.slice()
  	  }
  	}
  }


function chatroom(){
	var chatRooms = []
	return {
		addChatRoom: function(chatroom){
			chatroom.push(chatroom);
			return chatRooms.slice()
		},
		deleteChatRoom: function(chatroom){
			var index = chatRooms.indexOf(chatroom);
			chatRooms.pop(index);
			return chatRooms.slice()
		}
	}
}

function returnError(errMsg){
  var errMessages = [];
  return function addToArr(errMsg){
  	return errMessages.push(errMsg);
  }
}

function appendTo(selector, structure){
	$(selector).append(structure);
};

function wrapAll(selector, structure){
	$(selector).wrapAll(structure);
}

function getScrollTop(){
	return window.scrollY;
}

function returnElementsArr(selector){
	var elements = document.querySelectorAll(selector);
	var arr = [].slice.call(elements);
	return arr.map(function(val){
		return val
	});
}

function removeChildrenByClass(selector){
	var elements = document.querySelectorAll(selector);
	// console.log(elements);
	elements.forEach(function(el){
		el.remove()
	});
}

function returnClassesArr(selector){
	var elements = document.querySelectorAll(selector);
	var arr = [].slice.call(elements);
	return arr.map(function(val){
		return val.classList
	});
}

function addClassToAll(selector, newclass){
	var elmnts = returnElementsArr(selector);
	elmnts.forEach(function(val){
		val.classList.add(newclass)
	});
}


function* somefunction(j){
	for(let i=0; i<j; i++){
		console.log(i);
	}
	yield i
}


function otherArrayFrom(arraylikeObj){
	return var arr = Array.from(arraylikeObj);
}

function useFindOnArray(arr){
	return arr.find(function(val){
		return val.name === "Tim";
	});
}

"string".includes("ring"): //true

function seeIfNumber(val){
	if(typeof val === 'number' && !isNaN(val)){
		return "It is a number!";
	}
}

function seeIfNumber(val){
	if(Number.isFinite(val){
		return "It is a number!";
	});
}

function isInteger(val){
	if(Number.isInteger(val){
		return "it is an integer";
	});
}

var calculateNumber = 2**4; //16

async function first(){
	return "we did it";
};
first();
first.then(val => console.log(val)); // we did it;


async function getMovieData(){
	console.log("starting!");
	var movieData = await $.getJSON('https://omdbapi.com?t=titanic&apikey=thewdb');
	// this line does not run until the promise is resolved!
	console.log('all done');
	console.log(movieData);
}
getMovieData();

var movieCollector = {
	data: 'titanic',
	async getMovie(){
	  var response = await $.getJSON(`https://omdbapi.com?t=${this.data}&apikey=thewdb`)
	console.log(response);
	}
}

class MovieData {
	constructor(name){
		this.name = name;
	}
	async getMovie(){
		var response = await $.getJSON(`https://omdbapi.com?t=${this.data}&apikey=thewdb`)
	    console.log(response);
	}
}

var m = new MovieData('shrek');
m.getMovie();


async function getUser(user){
	try {
		var response = await $.getJSON(`https://api.github.com/users/${user}`);
		console.log(response.name);
	} catch(e){
		console.log("User does not exist!");
		return "User does not exist!";
	}
}

var p = new Promise(function(resolve, reject){
	var randNum = Math.floor(Math.random() * 11);
	if(randNum > 5){
		resolve('you generated a number greater than 5: '+randNum);
	} else {
		reject('number was less than 5: ' + randNum);
	}
});

p.then(function(data){
  console.log(data);
}).catch(function(data){
  console.log(data);
});


var promise = new Promise(function(resolve, reject){
	setTimeout(function(){
		randomInt = Math.floor(Math.random()*10);
		resolve(randomInt);
	}, 500);
});

promise.then(function(data){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			randomInt = Math.floor(Math.random()*100);
			resolve(randomInt+data);
		}, 2000);
	});
}).then(function(data){
	console.log("1st+2nd = ", data);
});


var promise2 = new Promise(function(resolve, reject){
	resolve(4);
});

promise2.then(function(data){
	return data*4;
}).then(function(data){
	return data+14;
}).then(function(data){
	return Math.floor(data/3);
});

var promise3 = new Promise(function(resolve, reject){
	resolve('data');
}).then(function(data){
	return data+" plus more data";
}).then(function(data){
	return somefunction(data);
});

var counter = 0;
function incCounter(){
	counter++;
	console.log("Counter:", counter)
}

function runLater(callback, timeInMs){
	var p = new Promise(function(resolve, reject){
		setTimeout(function(){
			var res = callback();
			resolve(res);
		}, timeInMs);
	});
  return p;
}

runLater(incCounter, 1000).then(function(){
	return runLater(incCounter, 2000);
}).then(function(){
	return runLater(incCounter, 3000);
}).then(function(){
	runLater(incCounter, 1500);
	console.log('finished'); //this will shown before the line above
});


//Rest Operator:
function printRest(a,b,...c){
	console.log(a);
	console.log(b);
	console.log(c);
}
var printRest = (a,b,...c) => console.log(a,b,c);
var sumArguments = (...args) => args.reduce((acc, next) => acc + next);

// Spread Operator
var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [7,8,9];

var combined = [...arr1, ...arr2, ...arr3];
Math.max.apply(...combined);

var nums = [12,15,20];
function sumValues(a,b,c){
	return a+b+c;
}
sumValues(...nums);



class Person {
	constructor(fn,ln,age){
		this.fn = fn;
		this.ln = ln;
		this.age = age;
		sayname = function(){
			return `My Name is ${fn} ${ln}`
		}
	}
}

class Box extends React.Component {
  render() {
  	const randval = Math.floor(Math.random()*100);
  	return (
  		// html goes here

  		)

  	
  }
}
ReactDom.render(<Box />, document.getElementById("app"));



// class Row extends Component {
// 	render(){
// 		return (

// 		    <div style={{
// 		    	display: 'flex',
// 		    	flexDirection: 'row',
// 		    	justifyContent: 'space-around'
// 		    }}>
// 		      {this.props.children}
// 		      //everything inside Row element now has
// 		      //these styles
// 		    </div>

// 		)
// 	}
// }


fun

})();
