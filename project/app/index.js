var APP = module.exports = {
	init: function(){
		var p = document.createElement('p');
		p.innerHTML = 'application bootstrapped'; 
		document.body.appendChild(p);
	}
};