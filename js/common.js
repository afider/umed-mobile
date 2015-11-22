
	$(function() {

		document.getElementById('svg-icons').innerHTML = SVG_ICONS;
		initCustomSelect(); // кастомные селекты
		animateRegionSelect(); // анимирование выбора региона
	});

	function initCustomSelect() {
		
		$('.js-select').customSelect();
	}

	function animateRegionSelect() {
		var openState = 'sub-header_open';
		var control = $('.sub-header_select');
		var showHideTarget = $('.more-items');

		control.on('click', function() {
			var self = $(this);
			self.toggleClass( openState );
			showHideTarget.slideToggle( 300 );
			
		});
	}
