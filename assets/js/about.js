import '../css/main.css';

window.onload = () => {
	var goToGalleryFromContact = document.getElementById('go_to_gallery_from_contact');
	var goToMain = document.getElementById('go_to_main');
	var body = document.getElementsByTagName("BODY")[0];

	try {
		goToGalleryFromContact.addEventListener('click', () => {
			goToLocation('./gallery.html');
		});
	}
	catch(err) {
		console.error(err);
	}

	try {
		goToMain.addEventListener('click', () => {
			goToLocation('./index.html')
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
