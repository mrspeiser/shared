//XHR AJAX REQUEST

var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function(){

		// console.log("ready state is...." + XHR.readyState);
		if(XHR.readyState == 4){
			if(XHR.status == 200){
			  var text = XHR.responseText;
			  console.log(text);
			} else {
				console.log("There was a problem!");
			}

		}
	}

XHR.open("GET", "https://api.github.com/zen");
XHR.send();


//example

var btn = document.querySelector('#btn');
var photo = document.querySelector('#img');

btn.addEventListener("click", function(){
	//make the reqeust
	var XHR = new XMLHttpRequest();
	XHR.onreadystatechange = funnction(){
		if(readyState == 4 && XHR.status == 200){
			console.log(XHR.responseText);

			//structure response as json data
			var data = JSON.parse(XHR.responseText);
			console.log(data);

			//now just get data we want for image or whatever
			var data = JSON.parse(XHR.responseText).message;
			var imgUrl = data.message;

			photo.src = imgUrl;
		}
	}

	XHR.open("GET", url);
	XHR.send();

})


//FETCH API AJAX REQUEST

var url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

fetch(bitcoinURL)
.then(function(response){
	console.log(response);
	return response.json()
})
.then(function(data){
	console.log(data);
});

fetch(url)
.then(function(res){
	console.log(res);
})
.catch(function(error){
	console.log(error);
})

//OPTIONS FOR FETCH

fetch(url, {
	method: 'POST',
	body: JSON.stringify({
		name: 'blue',
		login: 'bluefox'
	})
})
.then(function(data){
	//do something
})
.catch(function(err){
	//catch err
})


var github = 'https://api.github.com/users/mrspeiser';
fetch(url)
.then(function(res){
	if(res.ok)
	console.log(res);
	return res.json()
})
.then(function(data){
	console.log(data.bpi);
})
.catch(function(err){
	console.log(err);
})


var btn = document.querySelector('button');
btn.addEventListener('click', function(){
  var url = 'https://api.github.com/users/mrspeiser';
  fetch(url)
  .then(handleErrors)
  .then(function(request){
  	console.log("everything is fine!");
  	console.log(request);
  })
  .catch(function(error){
  	console.log(error);
  })
});


btn2.addEventListener('click', function(){
	var url = github;
	fetch(url)
	.then(function(){
		if(!request.ok){
			//throw error
			console.log('ERROR WITH RESPONSE STATUS')
		}
		console.log("EVERYTHING IS FINE!");
		
	})
	.catch(function(){
		console.log('No internet connection/problem with actual request')
	})
})

btn3.addEventListener('click', function(){
	fetch(url)
	.then(function(res){
		if(!res.ok){
			throw Error("custom error");
		}
		return res;
	})
	.then(function(res){
		console.log('ok');
	}).catch(function(error){

	});
});

btn4.addEventListener('click', function(){
	var url = 'https://api.github.com/users/mrspeise3r';
	fetch(url)
	.then(function(request){
		if(!request.ok){
			throw Error(request.status)
		}
		return request
	})
	.then(function(request){
		console.log(request);
		var data = request.json()
	})
	.then(function(data){
		console.log(data)
	})
	.catch(function(err){
		console.log(err);
	})
});


function requestOkCheck(request){
	if(!request.ok){
		throw Error(request.status)
	}
	return request

}
function fetchRequest(url){
  fetch(url)
  .then(requestOkCheck)
  .then(function(res){
  	console.log(res)
  })
  .catch(function(err){
  	throw Error('Request Attempt Was Unsuccessful')
  });
}


function fetchRequest(url){
  fetch(url)
  .then(requestOkCheck)
  .then(function(res){
  	return res.json()
  })
  .then(function(data){
    console.log(data); 
  })
  .catch(function(err){
  	throw Error('Request Attempt Was Unsuccessful')
  });
}



$('#tweet-box-home-timeline div').html('Holy Moly, I can write tweets so fast now');
$('.js-tweet-btn').click();




