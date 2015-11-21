
	$(function() {

		document.getElementById('svg-icons').innerHTML = SVG_ICONS;
		initCustomSelect(); // кастомные селекты
 		
	});


	function initCustomSelect () {
		
        $('.js-select').customSelect();
	} // initCustomSelect

