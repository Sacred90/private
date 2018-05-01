window.onload = () => {
	var goToAbout = document.getElementById('go_to_about');
	var goToMain = document.getElementById('go_to_main');
	var body = document.getElementsByTagName("BODY")[0];

	try {
		goToAbout.addEventListener('click', () => {
			goToLocation('./about.html')
		});
	}
	catch(err) {
		console.error(err);
	}

	try {
		goToMain.addEventListener('click', () => {
			goToLocation('../../index.html')
		});
	}
	catch(err) {
		console.error(err);
	}

	function goToLocation(location) {
		body.classList.add("overlay");

		setTimeout(function(){
			window.location.href = location;
		}, 2000);
	}
}
