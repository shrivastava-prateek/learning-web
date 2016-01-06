var xhr = new XMLHttpRequest();
	xhr.addEventListener("readystatechange", changeHandler);
	xhr.open("get","../data/data.json", true);
	xhr.send(); 
	
function changeHandler(){
	if(xhr.readyState == 4 && xhr.status == 200){
		 postMessage(xhr.responseText);
		//postMessage("hello");
	}
}