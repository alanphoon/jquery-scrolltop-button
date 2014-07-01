/*---------------------------------------
Jquery ScrollTop Button
Copyright (c) 2014 Alan Phoon, www.ampedupdesigns.com  
This notice MUST stay intact for legal use and may not be modified.

Licensed under GNU GENERAL PUBLIC LICENSE
-----------------------------------------*/


$.fn.extend({

	ebatesAddScrollTop: function(options) {
	
		var defaults = {
	            useObjWindow : false,
	            scrollSpeed : 'fast',
	            zIndex: '99'
	        }
	
	        var options = $.extend(defaults, options);	
	
		if($('body').find('.scrollTop-btn').length == 0) {
			$('body').append('<div class="scrollTop-btn" style="display:none;"><i class="fa fa-chevron-up"></i></div>');
		}
	
		if(options.useObjWindow) {
			var parentWindow = this;
			var scrollWindow = this;
		}
		else {
			var parentWindow = window;
			var scrollWindow = 'html, body';
		}
	
		$(document).ready(function() {
			
			$('.scrollTop-btn').on('click', function() {
				$(scrollWindow).animate({scrollTop:0}, options.scrollSpeed);
			});
	
			$(parentWindow).scroll(function() {	
				$('.scrollTop-btn').hide();
				var aTop = $('.scrollTop-btn').height() + 20;
				
				if($(this).scrollTop() >= (aTop + 20)) {
					$('.scrollTop-btn').css('z-index', options.zIndex);
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
