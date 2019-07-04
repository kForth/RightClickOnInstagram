var observer = new MutationObserver(function(e){
	//Remove divs covering posts
	var photo_cover_divs = document.getElementsByClassName('_9AhH0');
	for(var i = 0; i < photo_cover_divs.length; i++){
		var div = photo_cover_divs[i];
		div.parentNode.removeChild(div);
	}

	//TODO: Enable right-click on stories.
});
observer.observe(document.body, { childList: true, subtree: true });
