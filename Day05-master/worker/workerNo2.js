var num = 100;

addEventListener("message", updateNumber);

function updateNumber(event){
	num = event.data;
};

setInterval(function(){
	postMessage(Math.round(Math.random()*num));
}, 1000);
