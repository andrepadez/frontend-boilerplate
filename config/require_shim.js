var fs = require('fs'); console.log(fs);

var ROOT = '/project/app/';

window.require = function(path){
	var xhr = new XMLHttpRequest();
	xhr.onload = function(){
		console.log(xhr.responseText);
	};
	xhr.open('get', ROOT + path);
	xhr.send();
};

//require('index.js');