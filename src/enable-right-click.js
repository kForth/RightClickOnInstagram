function deleteDivsByClassName(class_name){
	var divs = document.getElementsByClassName(class_name);
	for(var i = 0; i < divs.length; i++){
		var div = divs[i];
		div.parentNode.removeChild(div);
	}
}

var observer = new MutationObserver(function(e){
	//Remove divs covering post images
	deleteDivsByClassName('_9AhH0');

	//Remove divs covering post videos
	deleteDivsByClassName('oujXn');
	deleteDivsByClassName('QvAa1');

	//Remove class that block right-clicking
	//TODO: This has a bug where the first image doesn't resize until you click on it.
	// divs = document.getElementsByClassName('y-yJ5');
	// for(var i = 0; i < divs.length; i++){
	// 	divs[i].addEventListener('load', function(){
	// 		this.classList.remove('y-yJ5');
	// 	});
	// }
});
observer.observe(document.body, { childList: true, subtree: true });
