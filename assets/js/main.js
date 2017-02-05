$(document).ready(function(){
	$(".dg.ac").remove();
	$(" div > div").remove(); //nasted fix TODO: change selector;
	
	$(".go_to_gallery").click(function() {
		$("body").addClass("overlay");
		setTimeout(function(){
			window.location.href = 'assets/html/gallery.html';
		}, 2000);
	})
	
	$(".go_to_contact").click(function() {
		$("body").addClass("overlay");
		setTimeout(function(){
			window.location.href = './about.html';
		}, 2000);
	})

	$(".go_to_main").click(function() {
		$("body").addClass("overlay");
		setTimeout(function(){
			window.location.href = '../../index.html';
		}, 2000);
	})
});