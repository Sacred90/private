import '../css/start-page.css';
import '../css/main.css';

window.onload = () => {
	var goToGallery = document.getElementById('go_to_gallery');
	var body = document.getElementsByTagName("BODY")[0];

	try {
		goToGallery.addEventListener('click', () => {
			goToLocation('./gallery.html')
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
