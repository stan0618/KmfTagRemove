window.onload = function () {
	var box = document.querySelectorAll('.shield-box');
	console.log(box);
	remove(box,null);
	var blur_word = null;
	setTimeout(function() {
	//your code to be executed after 1 second
		blur_word = document.querySelectorAll('.blur');
		console.log(blur_word);
		
	}, 1500);
	
	var go = setInterval(function () {
		blur_word = document.querySelectorAll('.blur');
		remove(blur_word,'blur');
		if(blur_word!=null){
			clearInterval(go);
		}
	}, 500);

	function remove(a,word){
		console.log(a);
		if(word == null){
			a.forEach(function(element){
				console.log(element);
				element.remove();
			});
		}else{
			a.forEach(function(element){
				console.log(element);
				element.classList.remove(word);
			});
		}
	}
}();
