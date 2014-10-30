/* global jquery, $ */

;
(function($) {

    'use strict';

    // Define plugin name and parameters
    $.tappification = function(options) {

        var $tappification = $('.tappification');

        // define some default options for the notification
        var defaultOptions = {
            type: '',
            message: '',
            callToActionText: '',
            callToActionUrl: '',
            position: 'bottom',
            velocityOpen: 600,
            velocityClose: 200
        };

        // // override our default options with those provided by the user
        var finalOptions = $.extend({}, defaultOptions, options);

        // // create shorthand methods for easy acess
        var type = finalOptions.type,
            message = finalOptions.message,
            callToActionText = finalOptions.callToActionText,
            callToActionUrl = finalOptions.callToActionUrl,
            velocityOpen = finalOptions.velocityOpen,
            velocityClose = finalOptions.velocityClose,
            position = finalOptions.position,
            iconType;

        console.log(finalOptions);

        // pick a font-awesome icon based on the notification type
        function determineIcon() {
            if (type === 'info') {
                return 'fa-comments';
            } else if (type === 'warning') {
                return 'fa-exclamation-circle';
            } else if (type === 'danger') {
                return 'fa-exclamation-circle';
            } else {
                return 'fa-meh-o';
            }
        }

        // the template
        var $template = $([
            '<div class="tappification tappification-dismissible" data-position="" role="alert">',
            '    <div class="container">',
            '        <div class="tappification-icon">',
            '            <i class="fa"></i>',
            '        </div>',
            '        <div class="tappification-message"></div>',
            '        <div class="tappification-link">',
            '            <a class="primary"></a>',
            '        </div>',
            '        <button type="button" class="tappification-close" data-dismiss="alert">',
            '            <span aria-hidden="true"><i class="fa fa-times-circle-o"></i>',
            '            </span>',
            '        </button>',
            '    </div>',
            '</div>'
        ].join('\n'));

        // // Create the content of the notification
        $template.addClass('tappification-' + type);
        $template.find('.tappification-icon i').addClass(determineIcon());
        $template.find('.tappification-message').text(message);
        $template.find('.tappification-link a').text(callToActionText);
        $template.find('.tappification-link a').attr('href', callToActionUrl);
        $template.attr('data-position', position);

        // Remove recent notification so new one can appear
        $tappification.remove();
        $('body').prepend($template);

        var tappificationHeight = $template.outerHeight();

        // Show Notification
        if (position === 'bottom') {
            $template.css({'bottom': '-' + tappificationHeight});
            $template.animate({
                bottom: '0px'
            }, velocityOpen);
        }

        // Close Notification
        $('.tappification-close').click(function() {
            // Move notification
            if (position === 'bottom') {
                $template.animate({
                    bottom: '-' + tappificationHeight
                }, velocityClose);
            }
        });

    }

}(jQuery));
