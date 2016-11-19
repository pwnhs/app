$(document).keydown(function(e){
	if(e.which === 123){
		return false;
	}
});
$('#officer-handler').on('touchend', function() {
	var testV = 1;
	swal({
		title: "Prove You're an Officer:",
		input: 'text',
		inputPlaceholder: "\u25CF\u25CF \u25CF\u25CF\u25CF\u25CF \u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF \u25CF\u25CF \u25CF\u25CF",
		showCancelButton: true,
		inputAttributes: {
			'autofocus': 'autofocus',
			'autocapitalize': 'off',
			'autocorrect': 'off'
		},
		inputValidator: function(password) {
			return new Promise(function(resolve, reject) {
			  var hashedPass = md5(password.toLowerCase());
			  if (hashedPass == "e8c9ba236728c2015606bc0df7b278e2") {
				window.location.href = 'http://pwnhs.org/scripts/typed/typed-trimmed.html';
			  } else if (testV == 1) {
				testV = testV + 1;
				reject('2 Tries Left');
			  } else if (testV == 2) {
				testV = testV + 1;
				reject('1 Try Left');
			  } else if (testV == 3) {
				swal.close();
				$('#officer-handler').addClass('hidden');
				$('#officer-fail').removeClass('hidden');
			  }
			});
		},
	})
});
