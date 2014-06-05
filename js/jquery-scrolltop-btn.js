$.fn.extend({
	addScrollTop: function(options) {
		
		var defaults = {
	             topOffset: 20,
	             buttonInner: '&#94;'
	         }
	
	         var options = $.extend(defaults, options);
			
		this.append('<div class="scrollTop-btn" style="display:none;">' + options.buttonInner + '</div>');
		$(document).ready(function() {
			$('.scrollTop-btn').on('click', function() {
				$('html, body').animate({scrollTop:0}, 'fast');
			});

			$(window).scroll(function() {
				var aTop = $('.scrollTop-btn').height() + options.topOffset;
				if($(this).scrollTop() >= (aTop + options.topOffset)) {
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
