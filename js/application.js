$(function(){

	var inputValue = $('#slider').val();

	document.getElementById("slider").oninput = function(){
		$('.slidevalue').html($('#slider').val())
	};

	console.log(inputValue)

});