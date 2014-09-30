var ROOT = '../project/theapp/';

window.module = {
	registeredModules: []
};

var theRequire = function(path, cb){
	window.require = function(){};
	var paths = Array.isArray(path)? path : [path];

	paths.forEach(function(path){
		(function(mod){
			var script = document.createElement('script');
			script.src = ROOT + path + '.js';
			script.onload = function(){
				window.require = theRequire;
				window[mod] = module.exports;
				module.registeredModules.push(mod);
				window.module.exports = null;
				if(typeof cb === 'function'){ cb(); }	
			};
			document.head.appendChild(script);	
		})(path.split('/').pop());
	});
};

theRequire.unregister = function(){
	module.registeredModules.forEach(function(mod){
		window[mod] = null;
	});
	module.registeredModules = [];
};

window.require = theRequire;
