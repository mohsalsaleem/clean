$(document).ready(function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 		$('.home').find('.card.horizontal').removeClass('horizontal');
	}
	console.log('Hello');
})