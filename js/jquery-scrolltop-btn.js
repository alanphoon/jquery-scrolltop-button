$.fn.extend({
	addScrollTop: function(options) {

		this.append('<div class="scrollTop-btn" style="display:none;"><i class="fa fa-chevron-up"></i></div>');

		$(document).ready(function() {
			$('.scrollTop-btn').on('click', function() {
				$('html, body').animate({scrollTop:0}, 'fast');
			});

			$(window).scroll(function() {
				var aTop = $('.scrollTop-btn').height() + 20;
				if($(this).scrollTop() >= (aTop + 20)) {
					$('.scrollTop-btn').show();
				}
				else {
					if($('.scrollTop-btn').is(":visible")) {
						$('.scrollTop-btn').hide();
					}
				}

			});
		});
	}
	
});
