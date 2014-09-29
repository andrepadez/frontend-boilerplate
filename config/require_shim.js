var ROOT = '../project/app/';

window.module = {};

var theRequire = function(path, cb){
	window.require = function(){};
	var script = document.createElement('script');
	script.src = ROOT + path;
	script.onload = function(){
		window.require = theRequire;
		if(typeof cb === 'function'){ cb(); }	
	};
	document.head.appendChild(script);
};

window.require = theRequire;
