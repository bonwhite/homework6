var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	volume.innerHTML = "100%";
	video.play();
	
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("slower 10%");
	video.playbackRate *=.9
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("faster 10%");
	video.faster(); /=.9
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead 5 seconds");
	video.skip();
	// if (seconds = ) {

	// }
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});