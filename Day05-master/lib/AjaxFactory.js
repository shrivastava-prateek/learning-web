var factory = {
	create : function(method, url, sync){
		var xhr = null;
		if(window.XMLHttpRequest){
			xhr = new XMLHttpRequest();
		}else {
			xhr = new ActiveXObject("Microsoft.XMLHttp");
		}
		return xhr;
	}
};
