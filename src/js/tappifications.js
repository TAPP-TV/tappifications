/* global jquery, $ */

;(function($){

	'use strict';

	// Define plugin name and parameters
	$.tappification = function(options) {

		// define some default options for the notification
		var defaultOptions = {
			type: '',
			message: '',
			callToActionText: '',
			callToActionUrl: '',
			position: 'bottom',
			velocity: 200
		};

		// // override our default options with those provided by the user
		var finalOptions = $.extend({}, defaultOptions, options);

		// // create shorthand methods for easy acess
		var type = options.type, 
			message = options.message,
			callToActionText = options.callToActionText,
			callToActionUrl = options.callToActionUrl,
			iconType;

		console.log(finalOptions);

		// // Remove recent notification so new one can appear
		// $('.tappification').remove();

		// // Create the content of Alert
		// var close = "<a class='notify-close'>x</a>";
		// var header = "<section class='notify' data-position='"+ position +"' data-notify='" + type + "'>" + close + "<h1>" + message + "</h1>";
		// var content =  "<div class='notify-content'>" + $content + "</div></section>";

		// var notifyModel = header + content;

		// $('body').prepend(notifyModel);

		// var notifyHeigth = $('.notify').outerHeight();

		// // Show Notification

		// if(position == "bottom"){
		// 	$('.notify').css('bottom', '-' + notifyHeigth);
		// 	$('.notify').animate({
		// 		bottom: '0px'
		// 	},velocity);
		// }


		// Close Notification
		$('.tappification-close').click(function(){
			// Move notification
			if(position == "bottom"){
				$(this).parent('.notify').animate({
					bottom: '-' + notifyHeigth
				},velocity);
			}

		});

		function determineIcon() {
			if (type === 'info') {
				return 'fa-comments';
			}
			else if (type === 'warning') {
				return 'fa-exclamation-circle';
			}
			else if (type === 'danger') {
				return 'fa-exclamation-circle';
			}
			else {
				return 'fa-meh-o';
			}
		}

		// the template
		var $template = $([
		    '<div class="tappification tappification-dismissible" role="alert">',
		    '    <div class="container">',
		    '        <div class="tappification-icon">',
		    '            <i class="fa"></i>',
		    '        </div>',
		    '        <div class="tappification-message"></div>',
		    '        <div class="tappification-cta">',
		    '            <button type="button" class="primary"></button>',
		    '        </div>',
		    '        <button type="button" class="tappification-close" data-dismiss="alert">',
		    '            <span aria-hidden="true"><i class="fa fa-times-circle-o"></i>',
		    '            </span>',
		    '        </button>',
		    '    </div>',
		    '</div>'
		].join('\n'));

		$template.addClass('tappification-' + type);
		$template.find('.tappification-icon i').addClass(determineIcon());
		$template.find('.tappification-message').text(message);
		$template.find('.tappification-message').text(callToActionText);
		$template.find('.tappification-message').text(callToActionUrl);
	}

}(jQuery));

