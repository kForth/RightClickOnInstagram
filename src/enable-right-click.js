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
});
observer.observe(document.body, { childList: true, subtree: true });
