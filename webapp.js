$(document).ready(function(){
	if(window.navigator.userAgent.indexOf('iPhone') != -1){
		if(window.navigator.standalone == true){
			$('#download').hide();
			$('#app').show();
		} else {
			$('#app').hide();
			$('#download').show();
		}
	} else {
		$('#app').hide();
		$('#webapp').show();
	}
	
	if (window.matchMedia('(display-mode: standalone)').matches) {
		$('#app').show();
		$('#download').hide();
	}
});